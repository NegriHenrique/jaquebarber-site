import styled from 'styled-components'


export const  ContainerStyled = styled.div`
 display: flex;
 flex-direction: column;
 min-height: 100vh;
 width: 100%;



.banner{
    width: 100%;
 
    position:relative;
    height: 70vh;
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

.about-us{
    display:flex;
    margin: 0 auto;
    flex-direction:column;
    gap: 2rem;
    padding:2rem;

}



.text-about h2 {
    font-size:2rem;
    margin-bottom: 1.2rem;
    
}

.text-about button {
    margin-top: 1.2rem;
}



.hour-about{
    background: var(--primary-color);
    color: var(--light-color);
    height: 30rem;
    padding:2rem;
    font-size: 1.3rem;
    box-shadow: 14px 29px 12px rgba(0, 0, 0, 0.25);
    margin-top: 10rem;
    
}

hr{
    max-width: 20%;
    border: 2px solid var(--dark-color);
    margin-bottom:1.2rem;
    margin-top:1.2rem;
}

.hour-about h2{
    font-size: 2rem;
}
.hour-about h2:nth-child(1)  {
    margin-bottom: 1rem;
}

.local{
    margin-top: 1rem;
    margin-bottom:1rem;
}

.quotes{

    display:flex;
    margin-top:2rem;
    height:70vh;
    background: var(--dark-color);
    color: var(--light-color);
    flex-direction:column;

    
}

.carousel-text{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    flex:1;
    padding-bottom:4rem;

}

.carousel-text svg{
    font-size: 1.4rem;
}
.carousel-text p {
    line-height:1.3rem;
    text-align:center;
    max-width: 80%;
}
.icon-svg{
    background-color: var(--primary-color);
    border-radius: 50%;
    padding: 1.5rem;
    margin-bottom: 2rem;
    transition: background .3s;
    margin-top: 2rem;
}
.icon-svg:hover{
    background-color: var(--light-color);
    color: var(--dark-color);
   
}

.carousel-div{
    object-fit: fill;
    object-position:center;
    position:relative;
   
    width:100%;
    flex: 2;
 
}

.name-person{
    margin-top:2rem;
    font-size: 1.2rem;
    font-weight:100;
}





/* MEDIA QUERIES */


@media screen and (min-width: 992px){
    .about-us{
        flex-direction: row;
    }
    .hour-about{
        margin: 0;
        z-index: 9999;
    }

    .quotes{
        flex-direction: row;
    }
}

`