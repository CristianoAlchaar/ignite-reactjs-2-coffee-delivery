import {
  addNewCoffee,
  removeCofee,
  markCurrentOrderAsFinished,
  alterCoffeeItemById,
} from '../../reducer/orderReduce/action'
import { orderReducer } from '../../reducer/orderReduce/reducer'
import { coffeeItem } from '../CoffeeList/CoffeeListContext'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react'
export interface DeliveryAddress {
  CEP: string
  street: string
  houseNumber: number | null
  complement?: string
  district: string
  UF: string
  city: string
}

export const payMethod = {
  credit: 'Cartão de Crédito',
  debit: 'Cartão de Débito',
  money: 'Dinheiro',
} as const

export interface OrderedCoffeeItens extends coffeeItem {
  quantity: number
}

export interface CoffeeUserOrderType {
  orderId: number | null
  coffeeItens: OrderedCoffeeItens[]
  deliveryAdressData: DeliveryAddress | null
  paymentMethod: string
  totalPrice: number
  deliveryTax: number
  handleAddNewCoffeeInClientOrder: (
    coffee: coffeeItem,
    quantity: number,
  ) => void
  handleCoffeeItemChange: (
    coffeeId: number,
    alterCoffee: OrderedCoffeeItens,
  ) => void
  handleRemoveCofeeInClientOrder: (coffeeId: number) => void
  handleMarkCurrentClientOrderAsFinished: () => void
}

export const OrderContext = createContext({} as CoffeeUserOrderType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const initialOrderState: CoffeeUserOrderType = {
    orderId: null,
    coffeeItens: [],
    deliveryAdressData: null,
    paymentMethod: '',
    totalPrice: 0,
    deliveryTax: 0,
    handleAddNewCoffeeInClientOrder,
    handleCoffeeItemChange,
    handleRemoveCofeeInClientOrder,
    handleMarkCurrentClientOrderAsFinished,
  }

  const [orderState, dispatch] = useReducer(orderReducer, initialOrderState)

  const deliveryTax = 3.5

  const [totalPrice, setTotalPrice] = useState(0)

  const updateTotalPrice = useCallback(() => {
    let newTotalPrice = deliveryTax
    orderState.coffeeItens.map((coffeeItem) => {
      return (newTotalPrice += coffeeItem.price * coffeeItem.quantity)
    })
    setTotalPrice(newTotalPrice)
  }, [orderState.coffeeItens])

  useEffect(() => {
    updateTotalPrice()
  }, [updateTotalPrice, orderState.coffeeItens])

  function handleAddNewCoffeeInClientOrder(
    coffee: coffeeItem,
    quantity: number,
  ) {
    dispatch(addNewCoffee(coffee, quantity))
  }

  function handleCoffeeItemChange(
    coffeeId: number,
    alterCoffee: OrderedCoffeeItens,
  ) {
    dispatch(alterCoffeeItemById(coffeeId, alterCoffee))
  }

  function handleRemoveCofeeInClientOrder(coffeeId: number) {
    dispatch(removeCofee(coffeeId))
  }

  function handleMarkCurrentClientOrderAsFinished() {
    dispatch(markCurrentOrderAsFinished())
  }

  return (
    <OrderContext.Provider
      value={{
        orderId: orderState.orderId,
        coffeeItens: orderState.coffeeItens,
        deliveryAdressData: orderState.deliveryAdressData,
        paymentMethod: orderState.paymentMethod,
        totalPrice,
        deliveryTax,
        handleAddNewCoffeeInClientOrder,
        handleCoffeeItemChange,
        handleRemoveCofeeInClientOrder,
        handleMarkCurrentClientOrderAsFinished,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
