import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { key } from "../../config/key.js"
import { Container, MovieList, Movie } from './styles';


function SearchPage() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');
  

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      // Fazer a chamada à API do TMDB com o termo de pesquisa
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&query=${searchQuery}`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch(error => console.log(error));
    } else {
      setMovies([]); // Se a barra de pesquisa estiver vazia, exibir uma lista vazia
    }
  }, [searchQuery]);

  const renderMovies = () => {
    if (movies.length === 0) {
      return <p>Nenhum filme encontrado.</p>;
    }

    return movies.map(movie => (
      <Movie key={movie.id}>
        <Link to={`/details/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </Link>
        <span>{movie.title}</span>
      </Movie>
    ));
  };

  return (
    <Container>
      <div>
        <h1>Resultado da Pesquisa</h1>
        <p>Você pesquisou por: {searchQuery}</p>

        <h2>Resultados:</h2>
        <MovieList>
          {renderMovies()}
        </MovieList>
      </div>
    </Container>
  );
}

export default SearchPage;

