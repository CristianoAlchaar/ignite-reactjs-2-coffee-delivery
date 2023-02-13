import styled from 'styled-components'

export const SuccessContainer = styled.div`
  padding: 0 11%;
  margin-top: 30px;

  display: flex;
  gap: 10%;
  line-height: 130%;

  @media (max-width: 910px) {
    flex-direction: column;
    align-items: center;

    main,
    img {
      margin-bottom: 5%;
    }
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-500']};
    line-height: 150%;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
  }

  main {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 40px;
    gap: 32px;
    max-width: 526px;
    min-height: 270px;

    border: 1px solid; //#dbac2c #8047f8;
    border-color: #8047f8 #8047f8 #dbac2c #dbac2c;
    border-radius: 6px 36px;

    margin-top: 5%;

    i {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 8px;

      width: 2rem;
      height: 2rem;

      border-radius: 1000px;
    }

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
    }
  }
`

export const MapIcon = styled.i`
  background: ${(props) => props.theme['purple-300']};
`

export const TimerIcon = styled.i`
  background: ${(props) => props.theme['yellow-300']};
`

export const CurrencyIcon = styled.i`
  background: ${(props) => props.theme['yellow-500']};
`
