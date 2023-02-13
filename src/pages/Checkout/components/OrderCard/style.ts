import styled from 'styled-components'

export const OrderCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 44px;

  width: 448px;
  height: auto;

  @media only screen and (max-width: 450px) {
    width: 400px;
    padding: 40px 0px;
    gap: 24px 12px;
  }
`

export const CoffeeCardContainer = styled.div`
  margin-top: 16px;

  & > div {
    padding: 24px 0;
    border-bottom: 1px solid ${(props) => props.theme['gray-400']};
  }
`

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 100%;
  color: ${(props) => props.theme['gray-700']};

  div {
    width: inherit;
    display: flex;
    justify-content: space-between;
  }
`
export const EmphasisSpan = styled.span`
  color: ${(props) => props.theme['gray-800']};
  font-weight: 700;
  font-size: 1.25rem;
`

export const ConfirmOrderButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;

  max-width: 368px;
  width: inherit;
  height: 46px;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};

  background: ${(props) => props.theme['yellow-300']};
  border-radius: 6px;
  border: none;

  :hover {
    background: ${(props) => props.theme['yellow-500']};
    transition: background-color 0.2s;
  }
`
