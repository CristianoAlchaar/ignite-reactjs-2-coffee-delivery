import styled from 'styled-components'

export const CheckoutMainContent = styled.main`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 1rem;
  }

  div > form,
  div {
    margin-bottom: 0.75rem;
  }

  @media only screen and (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
  }
`
