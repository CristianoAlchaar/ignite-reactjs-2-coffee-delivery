import {
  CoffeeUserOrderType,
  OrderedCoffeeItens,
} from '../../contexts/CoffeeUserOrderContext/CoffeeUserOrderContext'
import { ActionTypes } from './action'

export function orderReducer(
  state: CoffeeUserOrderType,
  action: any, // Action
): CoffeeUserOrderType {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      const newCofee = action.payload.newCofee
      const newQuantity = action.payload.quantity
      const newCoffeeItens = [
        ...state.coffeeItens,
        { ...newCofee, quantity: newQuantity },
      ]
      return { ...state, coffeeItens: newCoffeeItens }
    }

    case ActionTypes.ALTER_COFFEE_BY_ID: {
      const newCofee = action.payload.alteredCoffeee
      const coffeeId = action.payload.coffeeId
      const newCoffeeItens = state.coffeeItens.map((coffee) => {
        if (coffee.id === coffeeId) {
          return { ...coffee, ...newCofee }
        }
        return coffee
      })
      return { ...state, coffeeItens: newCoffeeItens }
    }

    case ActionTypes.REMOVE_COFFEE: {
      const coffeeId = action.payload.coffeeId
      const newCoffeeItens = state.coffeeItens.filter(
        (coffee: OrderedCoffeeItens) => coffee.id !== coffeeId,
      )
      return { ...state, coffeeItens: newCoffeeItens }
    }

    case ActionTypes.MARK_CURRENT_ORDER_AS_FINISHED: {
      return { ...state, orderId: Date.now() }
    }
    default: {
      return state
    }
  }
}
