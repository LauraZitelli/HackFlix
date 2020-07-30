import React from 'react';
import PageRoot from '../../../components/PageRoot';
import { Link } from 'react-router-dom';

export default function CadastroCategoria(){
  return(
    <PageRoot>
      <h1>Cadastro de Categoria</h1>
      <Link to="/">
        Ir para Home
      </Link>
    </PageRoot>
  );
}