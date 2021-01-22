import styled from 'styled-components'


export const  ContainerStyled = styled.div`
 display: flex;
 flex-direction: column;
 min-height: 100vh;
 width: 100%;



.banner{
    width: 100%;
 
    position:relative;
    height: 992px;
}
.relative{
    position: relative;
}

.bannerimg{
    object-fit: cover;
    object-position: center;
}

.content-banner{
    color: var(--light-color);
    margin-top: 10rem;
    padding:2rem;
    text-align: center;
   
}
.content-banner h1{
    font-size:4rem;
    margin-bottom: 1.2rem;
    font-weight: 800;
}
.content-banner h2{
    font-weight: 100;
    line-height: 2rem;
}
.content-banner button{
    margin-top: 1.4rem;
    font-size: 1.2rem;
}




`