import React from 'react';
import * as C from './styles';

const Footer: React.FC = () => {
  return (
      <C.Container>
        <p>&copy; Developed by <span className="dev-name">Isabella Sanchis</span>.</p>
      </C.Container>
    );
};

export default Footer;