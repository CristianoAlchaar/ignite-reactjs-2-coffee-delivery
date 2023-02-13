import { AdressForm } from './components/AdressForm'
import { OrderCard } from './components/OrderCard'
import { PaymentMethod } from './components/PaymentMethod'
import { CheckoutMainContent } from './style'

export function Checkout() {
  return (
    <CheckoutMainContent>
      <div>
        <h1>Complete seu pedido</h1>
        <AdressForm />
        <PaymentMethod />
      </div>
      <div>
        <h1>Cafés Selecionados</h1>
        <OrderCard />
      </div>
    </CheckoutMainContent>
  )
}
