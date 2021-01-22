import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import {ContainerStyled} from '../styles/HomeStyles'
import Button from '../components/button'

export default function Home(props) {
  return (
    
   <ContainerStyled>
        <Head>
        <title>JaqueBarber - Agende o seu horário.</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap" rel="stylesheet"/>
      </Head>
          
     <Header></Header>
     
        <section className="banner relative">
              <Image 
                src="/banner.jpg"
                className="bannerimg"
                layout='fill'
           
              />
              
              <div className="relative content-banner">
                  <h1>Jaque <span className="primary-color">Barber</span></h1>
                  <h2>Agende seu horário em nossa barbearia.</h2>
                  <Button title="Agendar Horário"/>
              </div>
                  
           
              
        </section>

        <section className="about-us">
                  <div className="text-about">
                    <p>Sobre Nós</p>
                    <hr className="primary-color"/>
                    <h2>Conheça a <br/>Nossa Jornada</h2>
                    <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                    <Link href="/">
                    <Button title="Leia Mais"></Button>
                    </Link>
                    
                  </div>
                  <div class="hour-about">
                        <h2>Horários</h2>
                        <hr/>
                        <p><small>Segunda - Sexta: 10 da manhã Até as 22 da Noite</small></p>

                        <h2>Local</h2>
                        <hr/>
                        <p><address>2715 Ash Dr. San Jose, South Dakota 83475</address></p>
                  </div>
              </section>

     </ContainerStyled>

   
  ) 
}
