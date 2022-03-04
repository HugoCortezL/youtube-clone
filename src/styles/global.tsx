import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-color: #fffcfc;
        -webkit-font-smoothing: antialiased !important;
    }
`