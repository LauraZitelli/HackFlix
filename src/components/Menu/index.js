import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from '../ButtonLink/';

export default function Menu (){
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="HackFlix Logo"/>
      </a>

      <ButtonLink className="ButtonLink"  href="/"> 
        Novo Vídeo 
      </ButtonLink>
    </nav>
  );
}