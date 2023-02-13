import {
  CoffeeCardContainer,
  CoffeeTag,
  BuyContainer,
  Price,
  BuyChart,
} from './style'
import NumericInput from 'react-numeric-input'
import { ShoppingCartSimple } from 'phosphor-react'
import { coffeeItem } from '../../contexts/CoffeeList/CoffeeListContext'
import { useContext, useState } from 'react'
import { OrderContext } from '../../contexts/CoffeeUserOrderContext/CoffeeUserOrderContext'

export function CoffeeCard(props: coffeeItem) {
  const orderContext = useContext(OrderContext)
  const [quantity, setQuantity] = useState(1)

  return (
    <CoffeeCardContainer>
      <img src={props.imgPath} alt="" />
      <ul>
        {props.tags.map((tag) => (
          <li key={tag}>
            <CoffeeTag>{tag}</CoffeeTag>
          </li>
        ))}
      </ul>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <BuyContainer>
        <Price>{props.price.toFixed(2)}</Price>
        <NumericInput
          value={quantity}
          min={0}
          max={99}
          step={1}
          precision={0}
          size={5}
          maxLength={2}
          mobile
          strict
          onChange={(value) => setQuantity(value === null ? 0 : value)}
          style={{
            input: {
              background: '#E6E5E5',
              width: '6rem',
              height: '38px',
            },
            plus: {
              background: '#272221',
            },
            minus: {
              background: '#272221',
            },
            btn: {
              background: '#E6E5E5',
              border: 'none',
            },
            'btn:hover': {
              background: '#8047F8',
            },
            'input:not(.form-control)': {
              borderRadius: '6px',
            },
            'input:focus': {
              border: 'none',
              outline: 'none',
            },
          }}
        />
        <BuyChart
          onClick={() => {
            orderContext.handleAddNewCoffeeInClientOrder(
              {
                id: props.id,
                description: props.description,
                title: props.title,
                imgPath: props.imgPath,
                price: props.price,
                tags: props.tags,
              },
              quantity,
            )
            setQuantity(1)
          }}
        >
          <ShoppingCartSimple size={22} color="#F3F2F2" weight="fill" />
        </BuyChart>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
