import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import {
  OrderContext,
  payMethod,
} from '../../../../contexts/CoffeeUserOrderContext/CoffeeUserOrderContext'
import { PaymentMethodContainer } from './style'

export function PaymentMethod() {
  const orderContext = useContext(OrderContext)
  return (
    <PaymentMethodContainer>
      <header>
        <CurrencyDollar size={22} color="#C47F17" />
        <div>
          <h1>Pagamento</h1>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </header>
      <ul>
        <li
          tabIndex={1}
          onClick={() => (orderContext.paymentMethod = payMethod.credit)}
        >
          <CreditCard size={16} color="#8047F8" />
          Cartão de Crédito
        </li>
        <li
          tabIndex={1}
          onClick={() => (orderContext.paymentMethod = payMethod.debit)}
        >
          <Bank size={16} color="#8047F8" />
          Cartão de Débito
        </li>
        <li
          tabIndex={1}
          onClick={() => (orderContext.paymentMethod = payMethod.money)}
        >
          <Money size={16} color="#8047F8" />
          Dinheiro
        </li>
      </ul>
    </PaymentMethodContainer>
  )
}
