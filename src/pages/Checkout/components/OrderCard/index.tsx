import { SmallCoffeeCard } from '../SmallCofeeCard'
import {
  OrderCardContainer,
  CoffeeCardContainer,
  OrderInfoContainer,
  EmphasisSpan,
  ConfirmOrderButton,
} from './style'

import { useContext } from 'react'
import {
  CoffeeUserOrderType,
  OrderContext,
} from '../../../../contexts/CoffeeUserOrderContext/CoffeeUserOrderContext'
import { useNavigate } from 'react-router-dom'

export function OrderCard() {
  const navigate = useNavigate()
  const orderContext = useContext(OrderContext)

  function hasNonEmptyValues(obj: CoffeeUserOrderType) {
    for (const val of Object.values(obj)) {
      if (val === null || val === undefined || val === '') {
        return false
      } else if (Array.isArray(val)) {
        if (!val.every((v) => hasNonEmptyValues(v))) return false
      } else if (typeof val === 'object') {
        if (!hasNonEmptyValues(val)) return false
      }
    }
    return true
  }

  function handleSubmit() {
    orderContext.orderId = Date.now()
    const isReadyToSubmit = hasNonEmptyValues(orderContext)

    if (isReadyToSubmit) {
      console.log(orderContext)
      navigate('/success', {
        state: {
          userAddress: orderContext.deliveryAdressData,
          payMethod: orderContext.paymentMethod,
        },
        replace: true,
      })
    } else {
      alert(
        'Algo no formulário não está correto, por favor cheque se preencheu todos os dados',
      )
    }
  }

  return (
    <OrderCardContainer>
      <CoffeeCardContainer>
        {orderContext.coffeeItens.map((coffeeItem) => {
          return (
            <SmallCoffeeCard
              key={coffeeItem.id}
              id={coffeeItem.id}
              imgPath={coffeeItem.imgPath}
              title={coffeeItem.title}
              description={coffeeItem.description}
              price={coffeeItem.price}
              quantity={coffeeItem.quantity}
              tags={coffeeItem.tags}
            />
          )
        })}
      </CoffeeCardContainer>
      <OrderInfoContainer>
        <div>
          <span>Total de Itens</span>
          <span>
            R${(orderContext.totalPrice - orderContext.deliveryTax).toFixed(2)}
          </span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R${orderContext.deliveryTax.toFixed(2)}</span>
        </div>
        <div>
          <EmphasisSpan>Total</EmphasisSpan>
          <EmphasisSpan>R${orderContext.totalPrice.toFixed(2)}</EmphasisSpan>
        </div>
      </OrderInfoContainer>
      <ConfirmOrderButton onClick={handleSubmit}>
        Confirmar Pedido
      </ConfirmOrderButton>
    </OrderCardContainer>
  )
}
