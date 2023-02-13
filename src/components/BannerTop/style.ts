import styled from 'styled-components'
import background from './assets/Background.svg'

export const BannerContainer = styled.div`
  width: auto;
  height: 544px;
  background-image: url(${background});
  background-size: cover;
  padding: 0 11%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  * {
    line-height: 130%;
  }

  div:first-child {
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  header h1 {
    margin-bottom: 1rem;
  }

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 48px;
    color: ${(props) => props.theme['gray-900']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
  }

  ul li {
    display: flex;
    align-items: center;
    width: 50%;
    gap: 10px;
    padding: 10px 20px 10px 0;
    color: ${(props) => props.theme['gray-700']};
  }

  @media screen and (max-width: 1100px) {
    img {
      width: 25rem;
      height: auto;
    }

    @media screen and (max-width: 920px) {
      flex-direction: column;
      margin-top: 50px;
      height: auto;

      img {
        margin-top: 10px;
      }

      @media screen and (max-width: 420px) {
        ul {
          flex-direction: column;
        }
        ul li {
          width: inherit;
        }
        img {
          width: 20rem;
        }
      }
    }
  }
`
const BACKGROUND_COLORS = {
  orange: 'yellow-500',
  yellow: 'yellow-300',
  gray: 'gray-700',
  purple: 'purple-300',
} as const

interface IconContainerProps {
  backgroundColor?: keyof typeof BACKGROUND_COLORS
}

export const IconContainer = styled.span<IconContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 32px;
  height: 32px;
  background: ${(props) =>
    props.backgroundColor
      ? props.theme[BACKGROUND_COLORS[props.backgroundColor]]
      : props.theme['purple-500']};
  border-radius: 1000px;
`
