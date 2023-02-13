import { ShoppingCartSimple } from 'phosphor-react'
import { Container, Button } from './style'
import { useNavigate } from 'react-router-dom'

export function Empty() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/', { replace: true })
  }

  return (
    <Container>
      <h1>O seu carrinho está vázio</h1>

      <Button onClick={handleClick}>
        <p>Continuar comprando</p>
        <ShoppingCartSimple size={22} color="#F3F2F2" weight="fill" />
      </Button>
    </Container>
  )
}
