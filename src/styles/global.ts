import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`



        

:root {

    font-family: "Roboto" , sans-serif;
    --background: #202024;
    --green_light : #00B37E;
    --text-white: #E1E1E6;
    --grey : #323238;
    --black: #121214;
    --shape : #323238;
    margin: 0;
    padding: 0;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {

    @media screen and ( min-width : 1080px ) {
        font-size: 62.5%;
    }

    @media (min-width: 720px ) {
       font-size: 87.5%;
    }

    @media ( min-width : 480px ) {
        font-size: 100%;
    }
}

body {
    wekit-font-smoothing: antialiased;
    background: var(--background);
}

body , input , textarea , button {
    font-family: "Roboto" , sans-serif;
    font-weight: 400;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
    

`