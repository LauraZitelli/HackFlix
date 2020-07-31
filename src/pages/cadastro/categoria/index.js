import React, { useState } from 'react';
import PageRoot from '../../../components/PageRoot';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormFields';

export default function CadastroCategoria(){

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([{
    nome: 'Séries',
    descricao: '',
    cor: '',
  }]);
  const [valores, setValores] = useState(valoresIniciais);
  

  function setValor(chave, valor){
    //chave: nome, descricao, cor
    setValores({
      ...valores, 
      [chave]: valor // nome: 'valor' ou cor: 'valor' -> [chave] é recebida dinamicamente
    })
  }

  function handleChange(e){
    setValor(
      e.target.getAttribute('name'), 
      e.target.value
    );
  }

  return(
    <PageRoot>
      <h1>Cadastro de Categoria: {valores.nome} </h1>

      <form onSubmit={ function handleSubmit(e){
        e.preventDefault()
        setCategorias([
          ...categorias, //os ... concatenam os elementos que já estão no vetor com os novos elementos
          valores
        ]);
        setValores(valoresIniciais)
      }}>

        <FormField 
          type="text"
          value={valores.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField 
          type="text"
          value={valores.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField 
          type="color"
          value={valores.cor}
          name="cor"
          onChange={handleChange}
        />
        
        
        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return(
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageRoot>
  );
}