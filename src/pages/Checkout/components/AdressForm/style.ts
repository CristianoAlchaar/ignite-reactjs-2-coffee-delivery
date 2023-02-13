import styled from 'styled-components'

export const AddressFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 15px; //32px;

  width: 40rem;
  height: 23.25rem;
  line-height: 130%;

  @media only screen and (max-width: 680px) {
    width: 100%;
    height: auto;
  }

  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;

  h1 {
    display: inline-block;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    color: ${(props) => props.theme['gray-700']};
    font-size: 0.875rem;
  }

  header {
    width: 100%;
    display: flex;
    gap: 8px;
  }

  input,
  label {
    height: 42px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;

    background: ${(props) => props.theme['gray-300']};
    border: 1px solid ${(props) => props.theme['gray-400']};
    border-radius: 4px;

    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-700']};
  }

  label {
    display: inline;
    position: relative;
    font-style: italic;
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-600']};
    right: 0.2%;
    border-left: none;
  }

  input:focus {
    outline: none;
    border: 1px solid #c47f17;
  }
  /*Hide input arrows
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`
export const FormLine = styled.div`
  width: 100%;
  display: flex;
  gap: 0.1rem;

  @media only screen and (max-width: 580px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`
export const StreetInput = styled.input`
  width: 100%;
`

export const ComplementInput = styled.input`
  width: 100%;
  flex-grow: 1;
`

export const CityInput = styled.input`
  flex-grow: 1;
`

export const StateInput = styled.input`
  width: 3.75rem;
`
