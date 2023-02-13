import { BannerContainer, IconContainer } from './style'
import coffeeImg from './assets/CoffeeImg.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function BannerTop() {
  return (
    <BannerContainer>
      <div>
        <header>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </header>
        <ul>
          <li>
            <IconContainer backgroundColor="orange">
              <ShoppingCart size={24} color="#fafafa" weight="fill" />
            </IconContainer>
            Compra simples e segura
          </li>
          <li>
            <IconContainer backgroundColor="yellow">
              <Timer size={24} color="#fafafa" weight="fill" />
            </IconContainer>
            Entrega rápida e rastreada
          </li>
          <li>
            <IconContainer backgroundColor="gray">
              <Package size={24} color="#fafafa" weight="fill" />
            </IconContainer>
            Embalagem mantém o café intacto
          </li>
          <li>
            <IconContainer backgroundColor="purple">
              <Coffee size={24} color="#fafafa" weight="fill" />
            </IconContainer>
            O café chega fresquinho até você
          </li>
        </ul>
      </div>
      <div>
        <img src={coffeeImg} alt="copo de café com sementes frescas" />
      </div>
    </BannerContainer>
  )
}
