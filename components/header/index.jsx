import React from 'react';
import Button from '../button/'
import {HeaderStyle} from './style'

// import { Container } from './styles';

function Header() {
  return (
      
    <HeaderStyle className="header">
        <div className="logo">
            <h1>Logo</h1>
        </div>
        
        <nav className="nav-bar">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Sobre nós</a></li>
                <li><a href="">Contato</a></li>
                <li><a href=""><Button title="Agendar Horário"></Button></a></li>
            </ul>
        </nav>
        
       
       
    </HeaderStyle>

  );
}

export default Header;