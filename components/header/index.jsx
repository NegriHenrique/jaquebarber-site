import React from 'react';
import Link from 'next/link'

import {HeaderStyle} from './style'

// import { Container } from './styles';

function Header() {
  return (
      
    <HeaderStyle className="header">
        <nav className="nav-bar">
            <ul>
                <li><Link href="">Home</Link></li>
                <li><Link href="">Sobre</Link></li>
                <li><Link href="">Preços</Link></li>
                <li><Link href="">Contato</Link></li>
             
            </ul>
        </nav>
        
       
       
    </HeaderStyle>

  );
}

export default Header;