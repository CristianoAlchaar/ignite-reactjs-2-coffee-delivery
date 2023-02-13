import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['gray-200']};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 7.5rem;
    height: 7.5rem;
    position: relative;
    bottom: 2rem;
    margin-bottom: -2rem;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    color: ${(props) => props.theme['gray-600']};
    line-height: 1.3;
    text-align: center;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const CoffeeTag = styled.span`
  background-color: ${(props) => props.theme['yellow-100']};
  border-radius: 100px;
  color: ${(props) => props.theme['yellow-500']};
  font-weight: 700;
  padding: 3px 10px;
  font-size: 0.7rem;
  text-transform: uppercase;
`
export const BuyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px;
  gap: 10px;
`

export const Price = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.625rem;

  ::before {
    content: 'R$';
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    padding-right: 3px;
    text-transform: uppercase;
  }
`
export const BuyChart = styled.span`
  width: 2.375rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme['purple-500']};
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  :hover {
    background-color: ${(props) => props.theme['purple-300']};
  }
`
