import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import deliverIllustration from './../../assets/deliverIllustration.svg'
import { OrderContext } from '../../contexts/CoffeeUserOrderContext/CoffeeUserOrderContext'
import { SuccessContainer, MapIcon, TimerIcon, CurrencyIcon } from './style'

export function Success() {
  const location = useLocation()
  const orderContext = useContext(OrderContext)
  useEffect(() => {
    orderContext.handleResetOrderContext()
  }, [])
  return (
    <SuccessContainer>
      <div>
        <header>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegara até você</p>
        </header>
        <main>
          <span>
            <MapIcon>
              <MapPin size={16} color="#fafafa" weight="fill" />
            </MapIcon>
            {`Entrega em ${location.state.userAddress.street}, ${location.state.userAddress.houseNumber} -
            ${location.state.userAddress.city} - ${location.state.userAddress.UF}`}
          </span>
          <span>
            <TimerIcon>
              <Timer size={16} color="#fafafa" weight="fill" />
            </TimerIcon>
            Previsão de entrega <b>20 min - 30 min</b>
          </span>
          <span>
            <CurrencyIcon>
              <CurrencyDollar size={16} color="#fafafa" weight="fill" />
            </CurrencyIcon>
            {`Pagamento na entrega ${location.state.payMethod}`}
          </span>
        </main>
      </div>
      <img
        src={deliverIllustration}
        alt="Ilustração de um entregador em uma moto levando a encomenda rapidamente"
      />
    </SuccessContainer>
  )
}
