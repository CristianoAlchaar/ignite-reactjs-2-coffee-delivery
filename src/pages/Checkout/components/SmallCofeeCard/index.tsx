import { Trash } from 'phosphor-react'
import { useCallback, useContext, useEffect, useState } from 'react'
import NumericInput from 'react-numeric-input'
import { OrderContext } from '../../../../contexts/CoffeeUserOrderContext/CoffeeUserOrderContext'
import {
  CoffeeTitle,
  SmallCoffeeCardContainer,
  Price,
  ButtonContainer,
  TittleAndButtonsContainer,
  BtnRemove,
} from './style'

interface SmallCoffeeCardProps {
  id: number
  imgPath: string
  title: string
  description: string
  price: number
  quantity: number
  tags: string[]
}

export function SmallCoffeeCard(props: SmallCoffeeCardProps) {
  const orderContext = useContext(OrderContext)
  const [quantity, setQuantity] = useState(props.quantity)
  const inputValue = quantity

  const updateCoffeeItem = useCallback(() => {
    orderContext.handleCoffeeItemChange(props.id, {
      description: props.description,
      id: props.id,
      imgPath: props.imgPath,
      price: props.price,
      quantity,
      tags: props.tags,
      title: props.title,
    })
  }, [
    quantity,
    orderContext,
    props.id,
    props.imgPath,
    props.title,
    props.description,
    props.price,
    props.tags,
  ])

  useEffect(() => {
    updateCoffeeItem()
    return () => {
      updateCoffeeItem()
    }
  }, [quantity])

  return (
    <SmallCoffeeCardContainer>
      <img src={props.imgPath} alt="" />
      <TittleAndButtonsContainer>
        <CoffeeTitle>{props.title}</CoffeeTitle>
        <ButtonContainer>
          <NumericInput
            value={inputValue}
            min={0}
            max={99}
            step={1}
            precision={0}
            size={5}
            maxLength={2}
            mobile
            strict
            style={{
              input: {
                background: '#E6E5E5',
                width: '4.8rem',
                height: '32px',
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
            onChange={(newValue) => {
              if (newValue !== null) {
                setQuantity(newValue)
              } else {
                setQuantity(0)
              }
            }}
          />
          <BtnRemove
            onClick={() =>
              orderContext.handleRemoveCofeeInClientOrder(props.id)
            }
          >
            <Trash size={16} color="#8047F8" />
            Remove
          </BtnRemove>
        </ButtonContainer>
      </TittleAndButtonsContainer>
      <Price>R${(props.price * props.quantity).toFixed(2)}</Price>
    </SmallCoffeeCardContainer>
  )
}
