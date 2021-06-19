import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        list-style: none;
        text-decoration: none;
        border: none;
    }

    body {
    background: #d8f3dc;
    color: #333;
    -webkit-font-smoothing: antialiased;
    color: black;
    }
`;

