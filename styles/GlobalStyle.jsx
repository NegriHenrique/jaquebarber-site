import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
:root{
  --primary-color: #E15B48;
  --dark-color: #4B4747;
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
  background-color: var(--light-color);
  
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

.primary-color{
  color: var(--primary-color)
}
.light-color{
  color: var(--light-color)
}


`


