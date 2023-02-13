import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 15px;

  width: 640px;
  height: 207px;

  @media only screen and (max-width: 680px) {
    height: auto;
  }

  @media only screen and (max-width: 680px) {
    width: 100%;
  }

  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;

  line-height: 130%;

  h1 {
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-700']};
  }

  header {
    display: flex;
    gap: 8px;
  }

  ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;

    @media only screen and (max-width: 680px) {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }

  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    gap: 3px;
    font-size: 0.75rem;

    max-width: 11.125rem;
    width: 100%;
    height: 51px;

    background: ${(props) => props.theme['gray-400']};

    border: 1px solid ${(props) => props.theme['purple-300']};
    border-radius: 6px;
    cursor: pointer;
  }

  ul li:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  ul li:focus {
    background: ${(props) => props.theme['purple-100']};
  }
`
