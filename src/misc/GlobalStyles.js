import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    background: linear-gradient(0deg, white 65%, #367860 35%);
  }
`
