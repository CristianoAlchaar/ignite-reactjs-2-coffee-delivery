import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /*:focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }*/

    body{
        min-width: 400px;
        overflow-x: hidden;
        background: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['gray-700']};
        -webkit-font-smoothing:antialiased; 

        @media screen and (max-width: 400px){
            overflow-x: auto;
        }
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
