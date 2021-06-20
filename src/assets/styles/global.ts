import { createGlobalStyle } from 'styled-components';

export const fonts = {
    primary: "'Nunito', sans-serif",
    secondary: "'Nunito Sans', sans-serif"
}

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
    color: #333;
    -webkit-font-smoothing: antialiased;
    color: black;
    }
`;