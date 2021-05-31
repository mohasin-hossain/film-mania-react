import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #1b1b1b;
        font-family: "Inter", sans-serif;
    }

    button {
        cursor: pointer;
        font-size: .8rem;
        font-weight: bold;
        padding: .8rem 1.5rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all .5s ease;
        font-family: "Inter", sans-serif;

        &:hover {
            background-color: #23d997;
            color: white;
        }
    }

    h2 {
        font-weight: bold;
        font-size: 3rem;
        
    }

    h3 {
        color: white;
        font-size: 1.5rem;
        font-weight: 400;
    }

    h4 {
        font-weight: 400;
        font-size: 1rem;
    }

    span {
        font-weight: bold;
        color: #23d997;  
    }

    a {
        font-size: 1.1rem;
    }

    p {
        padding: 2.5rem 0rem;
        color: #ccc;
        font-size: 1.1rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;
