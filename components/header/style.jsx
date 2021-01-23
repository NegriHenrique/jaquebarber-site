import styled from 'styled-components'

export const HeaderStyle = styled.header `
    width:100%;
    position: absolute;
    z-index:9999;
    top:0;
    padding: 2.5rem;
    text-align:left;
  
  

   

.nav-bar ul {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
}
.nav-bar ul li {
    list-style: none;
    font-size:1.2rem;
}
.nav-bar ul li a{
    color: var(--light-color);
    transition: color .4s;
}

.nav-bar ul li a:hover{
    color: var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
}

`
