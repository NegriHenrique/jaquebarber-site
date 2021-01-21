import React from 'react';
import {StyledButton} from './style'

// import { Container } from './styles';

function Button(props) {
  return (
      <div>
        <StyledButton>{props.title}</StyledButton>
      
      </div>
  )
}

export default Button;