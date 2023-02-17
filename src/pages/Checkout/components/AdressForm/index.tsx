import { MapPinLine } from 'phosphor-react'
import {
  AddressFormContainer,
  CityInput,
  ComplementInput,
  FormLine,
  StateInput,
  StreetInput,
} from './style'
import {
  DeliveryAddress,
  OrderContext,
} from '../../../../contexts/CoffeeUserOrderContext/CoffeeUserOrderContext'
import React, { useContext, useEffect, useState, useRef } from 'react'

enum formularyChange {
  CHANGE_CEP,
  CHANGE_DISTRICT,
  CHANGE_HOUSE_NUMBER,
  CHANGE_STREET,
  CHANGE_COMPLEMENT,
  CHANGE_CITY,
  CHANGE_UF,
}

export function AdressForm() {
  const orderContext = useContext(OrderContext)

  const [userAddress, setUserAddress] = useState<DeliveryAddress>({
    CEP: '',
    district: '',
    houseNumber: null,
    street: '',
    UF: '',
    city: '',
  })

  const [validationState, setValidationState] = useState({
    isCEPValid: false,
    isDistrictValid: false,
    isHouseNUmberValid: false,
    isStreetValid: false,
    isUFValid: false,
    isCityValid: false,
  })

  const cepRef = useRef(null)
  const houseNumberRef = useRef(null)
  const ufRef = useRef(null)

  function handleValueChange(
    value: string | number,
    change: formularyChange,
    inputRef?: React.MutableRefObject<any>,
  ) {
    switch (change) {
      case formularyChange.CHANGE_CEP:
        if (typeof value === 'string') {
          const regex = /^\d/
          if (regex.test(value)) {
            const updatedAddress = { ...userAddress }
            updatedAddress.CEP = value
            setUserAddress(updatedAddress)
            if (updatedAddress.CEP.trim().length === 8) {
              setValidationState({ ...validationState, isCEPValid: true })
            } else setValidationState({ ...validationState, isCEPValid: false })
          } else if (value.length !== 0) {
            alert(
              'O CEP deve ser composto apenas por números e ter oito caractéres.',
            )
            if (inputRef !== undefined) {
              inputRef.current.value = ''
            }
          }
        }
        break
      case formularyChange.CHANGE_DISTRICT:
        if (typeof value === 'string') {
          if (value.length < 31 && value.trim().length > 0) {
            const updatedAddress = { ...userAddress }
            updatedAddress.district = value
            setUserAddress(updatedAddress)
            setValidationState({ ...validationState, isDistrictValid: true })
          } else {
            alert('O bairro deve ser preenchido e ter no máximo 30 caractéres')
            setValidationState({ ...validationState, isDistrictValid: false })
          }
        }
        break
      case formularyChange.CHANGE_HOUSE_NUMBER:
        if (typeof value === 'string') {
          const regex = /^[1-9]{1,5}$/
          if (regex.test(value)) {
            const updatedAddress = { ...userAddress }
            updatedAddress.houseNumber = Number(value)
            setUserAddress(updatedAddress)
            setValidationState({ ...validationState, isHouseNUmberValid: true })
          } else if (value.length !== 0) {
            alert(
              'O número da casa deve preenchido ser entre 0(sem nº) e 99999',
            )
            setValidationState({
              ...validationState,
              isHouseNUmberValid: false,
            })
            if (inputRef !== undefined) {
              inputRef.current.value = ''
            }
          }
        }
        break
      case formularyChange.CHANGE_STREET:
        if (typeof value === 'string') {
          if (value.length < 51 && value.trim().length > 0) {
            const updatedAddress = { ...userAddress }
            updatedAddress.street = value
            setUserAddress(updatedAddress)
            setValidationState({ ...validationState, isStreetValid: true })
          } else {
            alert(
              'O endereço da rua deve ser preenchido e ter no máximo 50 caractéres',
            )
            setValidationState({ ...validationState, isStreetValid: false })
          }
        }
        break
      case formularyChange.CHANGE_COMPLEMENT:
        if (typeof value === 'string') {
          const updatedAddress = { ...userAddress }
          updatedAddress.complement = value
          setUserAddress(updatedAddress)
        }
        break
      case formularyChange.CHANGE_CITY:
        if (typeof value === 'string') {
          if (value.length < 31 && value.trim().length > 0) {
            const updatedAddress = { ...userAddress }
            updatedAddress.city = value
            setUserAddress(updatedAddress)
            setValidationState({ ...validationState, isCityValid: true })
          } else {
            setValidationState({ ...validationState, isCityValid: false })
            alert('A cidade deve ser preenchida e ter no máximo 30 caractéres')
          }
        }
        break
      case formularyChange.CHANGE_UF:
        if (typeof value === 'string') {
          if (value.trim().length === 2 && /^[a-zA-Z]+$/.test(value)) {
            const valueUpperCase = value.toUpperCase()
            const updatedAddress = { ...userAddress }
            updatedAddress.UF = valueUpperCase
            setUserAddress(updatedAddress)
            setValidationState({ ...validationState, isUFValid: true })
          } else if (value.length === 2) {
            setValidationState({ ...validationState, isUFValid: false })
            alert('Entre com um UF válido')
            if (inputRef !== undefined) {
              inputRef.current.value = ''
            }
          }
        }
        break
    }
  }

  useEffect(() => {
    const allTrue = Object.values(validationState).every(
      (value) => value === true,
    )
    if (allTrue) {
      orderContext.deliveryAdressData = userAddress
    }
  }, [validationState])

  return (
    <AddressFormContainer>
      <header>
        <MapPinLine size={22} color="#C47F17" />
        <div>
          <h1>Endereço de Entrega</h1>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>
      <input
        type="text"
        ref={cepRef}
        placeholder="CEP"
        inputMode="numeric"
        pattern="\d*"
        max={9999999}
        maxLength={8}
        required
        onChange={(event) =>
          handleValueChange(
            event.target.value,
            formularyChange.CHANGE_CEP,
            cepRef,
          )
        }
      />
      <FormLine>
        <StreetInput
          type="text"
          placeholder="Rua"
          maxLength={50}
          required
          onChange={(event) =>
            handleValueChange(event.target.value, formularyChange.CHANGE_STREET)
          }
        />
      </FormLine>
      <FormLine>
        <input
          type="text"
          ref={houseNumberRef}
          placeholder="Nº casa"
          min={0}
          max={99999}
          maxLength={5}
          required
          onChange={(event) =>
            handleValueChange(
              event.target.value,
              formularyChange.CHANGE_HOUSE_NUMBER,
              houseNumberRef,
            )
          }
        />
        <ComplementInput
          type="text"
          placeholder="Complemento"
          maxLength={50}
          onChange={(event) =>
            handleValueChange(
              event.target.value,
              formularyChange.CHANGE_COMPLEMENT,
            )
          }
        />
        <label style={{ width: '72px' }}>Opcional</label>
      </FormLine>
      <FormLine>
        <input
          type="text"
          placeholder="Bairro"
          maxLength={30}
          required
          onChange={(event) =>
            handleValueChange(
              event.target.value,
              formularyChange.CHANGE_DISTRICT,
            )
          }
        />
        <CityInput
          type="text"
          placeholder="Cidade"
          maxLength={30}
          required
          onChange={(event) =>
            handleValueChange(event.target.value, formularyChange.CHANGE_CITY)
          }
        />
        <StateInput
          type="text"
          placeholder="UF"
          ref={ufRef}
          required
          maxLength={2}
          onChange={(event) =>
            handleValueChange(
              event.target.value,
              formularyChange.CHANGE_UF,
              ufRef,
            )
          }
        />
      </FormLine>
    </AddressFormContainer>
  )
}
