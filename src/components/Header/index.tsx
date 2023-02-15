import {
  HeaderContainer,
  CheckoutContainer,
  LocationContainer,
  NavContainer,
  ListProductsCountContainer,
} from './style'
import logoCoffeeDelivery from '../../assets/CoffeeDeliveryLogo.svg'
import { ShoppingCartSimple, MapPin } from 'phosphor-react'
import { Link, NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../contexts/CoffeeUserOrderContext/CoffeeUserOrderContext'
import { Geolocator } from '../Geolocator'

export function Header() {
  const orderContext = useContext(OrderContext)
  const { coffeeItens } = orderContext
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const qnt = coffeeItens.reduce((acc, item) => acc + item.quantity, 0)
    setQuantity(qnt)
  }, [coffeeItens])

  return (
    <HeaderContainer>
      <Link to="/" title="home">
        <img src={logoCoffeeDelivery} alt="" />
      </Link>
      <NavContainer>
        <LocationContainer>
          <MapPin size={24} color="#8047F8" weight="fill" />
          <Geolocator />
        </LocationContainer>
        <NavLink
          to={coffeeItens.length > 0 ? 'checkout' : 'empty'}
          title="checkout"
          style={{
            textDecoration: 'none',
            width: '2.375rem',
            height: '2.375rem',
          }}
        >
          <CheckoutContainer>
            <ShoppingCartSimple size={24} color="#C47F17" weight="fill" />
          </CheckoutContainer>
          <ListProductsCountContainer>{quantity}</ListProductsCountContainer>
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}
