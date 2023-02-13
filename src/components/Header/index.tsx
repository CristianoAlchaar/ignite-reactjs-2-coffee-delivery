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
import { useContext, useState, useEffect } from 'react'
import { OrderContext } from '../../contexts/CoffeeUserOrderContext/CoffeeUserOrderContext'
import { getUserAdress } from '../Geolocator'

export function Header() {
  const orderContext = useContext(OrderContext)
  const { coffeeItens } = orderContext

  const [userAdressData, setUserAdressData] = useState({})
  const userAdressPromise = getUserAdress()
  useEffect(() => {
    userAdressPromise.then((userAdress) => {
      setUserAdressData(userAdress)
    })
  }, [])

  return (
    <HeaderContainer>
      <Link to="/" title="home">
        <img src={logoCoffeeDelivery} alt="" />
      </Link>
      <NavContainer>
        <LocationContainer>
          <MapPin size={24} color="#8047F8" weight="fill" />
          Valença, PT
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
          <ListProductsCountContainer>
            {coffeeItens.length}
          </ListProductsCountContainer>
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}
