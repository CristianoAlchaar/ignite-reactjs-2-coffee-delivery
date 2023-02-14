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
      const coffeeId = newCofee.id
      const coffeeExists = state.coffeeItens.some(
        (coffee) => coffee.id === coffeeId,
      )
      if (coffeeExists) {
        // If coffee already exists, update the quantity instead of adding a new item
        const newCoffeeItens = state.coffeeItens.map((coffee) => {
          if (coffee.id === coffeeId) {
            return { ...coffee, quantity: coffee.quantity + newQuantity }
          }
          return coffee
        })
        return { ...state, coffeeItens: newCoffeeItens }
      } else {
        // If coffee does not exist, add a new item to the list
        const newCoffeeItens = [
          ...state.coffeeItens,
          { ...newCofee, quantity: newQuantity },
        ]
        return { ...state, coffeeItens: newCoffeeItens }
      }
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
