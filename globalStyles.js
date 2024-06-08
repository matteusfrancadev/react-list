import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    }

    *{
        font-family: "Roboto", sans-serif;
    }
`

export default GlobalStyles