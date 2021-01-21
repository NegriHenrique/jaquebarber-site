import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
:root{
  --primary-color: #E19248;
  --dark-color: #232121;
  --light-color: #EAE6E2;
}
*{
  margin:0;
  padding:0;
}

html,body,textarea, input,button{
  font-family: 'Montserrat', sans-serif;
}
html,
body {
  padding: 0;
  margin: 0;
  
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`


