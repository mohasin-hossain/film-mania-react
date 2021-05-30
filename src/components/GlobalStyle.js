import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #1b1b1b;
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

        &:hover {
            background-color: #23d997;
            color: white;
        }
    }

    h2 {
        font-weight: lighter;
        font-size: 2.5rem;
    }

    h3 {
        color: white;
    }

    h4 {
        font-weight: bold;
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
        font-size: 1.3rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;
