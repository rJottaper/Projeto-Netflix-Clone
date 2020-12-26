import React, { useEffect, useState } from 'react';
import './App.css'

import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow/MovieRow'
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie'
import Header from './components/Header/Header'

export default () => {

  const [movieList, setMovieList] = useState([]); // Criando a lista para ser exibida

  const [featuredData, setFeaturedData] = useState(null); // Pegando o filme que vai estar em destaque

  const [blackHeader, setBlackHeader] = useState(false); // Para saber quando ou não usar o black no header!
  
  useEffect(() => {

    const loadAll = async () => {

      // Pegar a Lista Total

      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o Filme em Destaque

      let originals = list.filter(i => i.slug === 'originals'); // Mini função para filtrar e pegar apenas os filmes que são originais, por isso a crianção do SLUG no inicio!
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1)); // Para gerar um numero aleatorio, assim o filme em destaque sempre vai ser aleatorio
      let chosen = originals[0].items.results[randomChosen];

      // Pegando informações adicionais com a função criada no Tmdb.js!

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);

    }

    loadAll();

  }, []);

  useEffect (() => {

    const scrollListener = () => {

      if (window.scrollY > 10) {
        setBlackHeader(true);
      }

      else {
        setBlackHeader(false);
      }

    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  })
  
  /* 
     
    Contéudo do Site
      - Header
      - Destaques
      - Listas 
      - Footer

  */
  
  
  return (
    
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} /> // Mesmo dentro do site, só vai aparecer caso tenha um filme!
      } 
     
      <section className="lists">

        {movieList.map((item, key) => ( // Item e Key que é necessario para todo filme!

         <MovieRow key={key} title={item.title} items={item.items} /> // Title para pegar o nome, e Items para pegar tais!

        ))}

      </section>

      <footer>
        Todos os Direitos de Imagem para NETFLIX <br></br>
        &copy; João Pedro
      </footer>

    </div>
  
  );

}