import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        min-width: 400px;
        overflow-x: hidden;
        background: #FAFAFA;
        color: #574F4D;
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
