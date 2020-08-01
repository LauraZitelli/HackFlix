import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageRoot from '../../../components/PageRoot';
import FormField from '../../../components/FormFields';
import Button from '../../../components/Button';

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    // chave: nome, descricao, cor
    setValores({
      ...valores,
      [chave]: valor, // nome: 'valor' ou cor: 'valor' -> [chave] é recebida dinamicamente
    });
  }

  function handleChange(e) {
    setValor(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL) // busca a url e então recebe uma resposta do servidor
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();// transforma a resposta em json
        setCategorias([
          ...resposta,
        ]);// adiciona a resposta (que é uma nova categoria) no array de categorias
      });
  }, []);

  return (
    <PageRoot>
      <h1>
        Cadastro de Categoria:
        {' '}
        {valores.nome}
        {' '}
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategorias([
          // eslint-disable-next-line max-len
          ...categorias, // os ... concatenam os elementos que já estão no vetor com os novos elementos
          valores,
        ]);
        setValores(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageRoot>
  );
}
