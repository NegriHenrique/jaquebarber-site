import styled from 'styled-components'
import syled, {css} from 'styled-components'

export const StyledButton = styled.button `

background: var(--primary-color);
color: var(--dark-color);
font-weight: bold;
border:0;
outline: 0;
padding: 1rem 1.5rem;
cursor: pointer;
transition: background .2s;

&:hover{
   color: var(--light-color);
   background: var(--dark-color)
}
`

