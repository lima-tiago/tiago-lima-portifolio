import { createGlobalStyle } from 'styled-components';
import BgCharacter from 'public/assets/bg-character.jpeg';

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Exo 2', sans-serif;
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box;
    --orange-senac: #F68B1F;
    --blue-senac: #004B8D;
  }

  body {
    background-color: #FFF;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    background-image: ${() => `url(${BgCharacter.src})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
