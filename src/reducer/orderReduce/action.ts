import { coffeeItem } from '../../contexts/CoffeeList/CoffeeListContext'
import { OrderedCoffeeItens } from '../../contexts/CoffeeUserOrderContext/CoffeeUserOrderContext'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  MARK_CURRENT_ORDER_AS_FINISHED = 'MARK_CURRENT_ORDER_AS_FINISHED',
  ALTER_COFFEE_BY_ID = 'ALTER_COFFEE_BY_ID',
}

interface AddNewCoffeeAction {
  type: ActionTypes.ADD_NEW_COFFEE
  payload: {
    newCofee: coffeeItem
    quantity: number
  }
}

interface AlterCoffeeItemById {
  type: ActionTypes.ALTER_COFFEE_BY_ID
  payload: {
    coffeeId: number
    alteredCoffeee: OrderedCoffeeItens
  }
}

interface RemoveCoffeeAction {
  type: ActionTypes.REMOVE_COFFEE
  payload: {
    coffeeId: number
  }
}

interface MarkCurrentOrderAsFinishedAction {
  type: ActionTypes.MARK_CURRENT_ORDER_AS_FINISHED
}

export type Action =
  | AddNewCoffeeAction
  | AlterCoffeeItemById
  | RemoveCoffeeAction
  | MarkCurrentOrderAsFinishedAction

export function addNewCoffee(coffee: coffeeItem, quantity: number) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      newCofee: coffee,
      quantity,
    },
  }
}

export function alterCoffeeItemById(
  coffeeId: number,
  alteredCoffeee: OrderedCoffeeItens,
) {
  return {
    type: ActionTypes.ALTER_COFFEE_BY_ID,
    payload: {
      alteredCoffeee,
      coffeeId,
    },
  }
}

export function removeCofee(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  }
}

export function markCurrentOrderAsFinished() {
  return {
    type: ActionTypes.MARK_CURRENT_ORDER_AS_FINISHED,
  }
}
