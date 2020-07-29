import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/LogoBranco.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Logo} alt="Logo HackFlix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          #ImersãoReact da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
