import React from 'react';
import Banner from '../../assets/banner.png';
import * as C from './styles';

const Header: React.FC = () => {
  return (
      <C.Container>
        <div>
            <h1>Disney characters API</h1>
            <p>Search for your favorites Disney characters!</p>
        </div>
        <img 
            src={Banner} 
            alt="Imagem dos personagens da Disney: Pato Donald, Pateta, Mickey Mouse e Pluto." 
        />
      </C.Container>
    );
};

export default Header;