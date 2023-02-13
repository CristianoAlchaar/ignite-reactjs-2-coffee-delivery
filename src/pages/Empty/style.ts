import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 6.25rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const Button = styled.button`
  text-transform: uppercase;
  font-weight: 700;
  background-color: ${(props) => props.theme['purple-300']};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
    transition: background-color 0.5s;
  }
`
