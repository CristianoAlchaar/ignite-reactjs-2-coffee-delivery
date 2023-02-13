import styled from 'styled-components'

export const SmallCoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 4px;

  width: 368px;
  min-height: 80px;

  background: ${(props) => props.theme['gray-200']};

  img {
    max-width: 64px;
    max-height: 64px;
  }
`

export const CoffeeTitle = styled.span`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['gray-800']};
`

export const Price = styled.span`
  text-transform: uppercase;
  font-weight: 700;

  display: flex;
  align-items: center;
  text-align: right;
  color: ${(props) => props.theme['gray-800']};
`

export const TittleAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
`
export const BtnRemove = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;
  border: 1px solid rgb(204, 204, 204);

  width: 91px;
  height: 32px;

  /* Base/Button */

  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;

  :hover {
    background-color: ${(props) => props.theme['gray-500']};
    transition: background-color 0.2s;
  }
`
