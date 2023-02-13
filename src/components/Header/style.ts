import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 32px 11%;
  height: 104px;
`

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 12px;
`

export const CheckoutContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  isolation: isolate;
  background: ${(props) => props.theme['yellow-100']};
  border-radius: 6px;

  width: 2.375rem;
  height: 2.375rem;
`
export const ListProductsCountContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0px;
  background: ${(props) => props.theme['yellow-500']};
  border-radius: 50%;

  position: relative;
  left: 60%;
  bottom: 40px;
  opacity: 0.9;
  width: 0.8rem;
  height: 0.8rem;

  font-weight: 400;
  font-size: 0.6rem;
  text-align: center;
  letter-spacing: -0.06em;
  color: ${(props) => props.theme.white};
`

export const LocationContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  min-width: 8.9375rem;
  height: 2.375rem;

  background: ${(props) => props.theme['purple-100']};
  border-radius: 6px;
  color: ${(props) => props.theme['purple-500']};
  cursor: default;
`
