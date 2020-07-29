import React from 'react';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{background: "var(--black)"}}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Starring Tom Ellis as Lucifer Morningstar"}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
        category={dadosIniciais.categorias[1]}
      />

      <Carousel 
        category={dadosIniciais.categorias[2]}
      />

      <Footer />
    </div>
  );
}

export default App;
