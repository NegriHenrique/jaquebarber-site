import styled from 'styled-components'

export const HeaderStyle = styled.header `

    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    margin: 1.2rem auto;


.logo{
    color: var(--primary-color)
}

.nav-bar ul {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
}
.nav-bar ul li {
    list-style: none;
}

`
