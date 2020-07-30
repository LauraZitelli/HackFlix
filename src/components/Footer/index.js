import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/LogoBranco.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="Logo HackFlix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          #ImersãoReact</a> da <b style={{color: '#1D85E3'}}>Alura</b>
      </p>
    </FooterBase>
  );
}

export default Footer;
