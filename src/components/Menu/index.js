import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

import { Link } from 'react-router-dom';

export default function Menu (){
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="HackFlix Logo"/>
      </Link>

      <Button as={Link} className="ButtonLink"  to="/cadastro/video"> 
        Novo Vídeo 
      </Button>
    </nav>
  );
}