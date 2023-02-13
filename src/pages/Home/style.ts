import styled from 'styled-components'

export const HomeMainContent = styled.main`
  margin-top: 30px;
  padding: 0 11%;
  line-height: 130%;

  h1 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['gray-800']};
    font-weight: 800;
    font-size: 2rem;
  }
`

export const CoffeListContainer = styled.ul`
  margin-top: 50px;
  padding-bottom: 50px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px 10px;
`
