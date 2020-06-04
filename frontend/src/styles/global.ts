import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #EDEDED;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab' serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  input {
    border: 1px solid #ddd;
  }

  button {
    cursor: pointer;
  }

  table, td, th {
    border: 1px solid #ddd;
    text-align: left;
  }

  a {
    color: #337ab7;
    text-decoration: none;
  }
`;
