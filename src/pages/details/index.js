import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { key } from "../../config/key";
import { Container, Movie, MovieList } from "./styles";
import { animateScroll } from 'react-scroll';

function Details() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(8); // Número de filmes a serem exibidos inicialmente
  const increment = 4; // Número de filmes para adicionar quando clicar em "Ver Mais"
  const image_path = "https://image.tmdb.org/t/p/original";
  const [cast, setCast] = useState([]);
  

  useEffect(() => {
    animateScroll.scrollToTop(); // Rolar para o topo da página ao abrir um novo filme

    fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=pt-BR`
      )
        .then((response) => response.json())
        .then((data) => {
            const mainCast = data.cast.filter((member) => member.order < 5);
            setCast(mainCast);
            console.log(mainCast);
        });

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=pt-Br-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, poster_path, backdrop_path, genres, release_date, overview } = data;
        const movieData = {
          id,
          title,
          genres,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          backdrop: `${image_path}${backdrop_path}`,
          releaseDate: release_date,
        };
        setMovie(movieData);
        console.log(movieData);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=pt-Br-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setSimilarMovies(data.results);
        console.log(data.results);
      });

    setVisibleMovies(8); // Resetar o estado visibleMovies ao carregar um novo filme
  }, [id]);

  const handleShowMore = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + increment);
    animateScroll.scrollToBottom({
      duration: 500,
      delay: 100,
      smooth: true,
    });
  };

  const renderMovies = () => {
    const moviesToRender = similarMovies.slice(0, visibleMovies);

    return moviesToRender.map((movie) => (
      <Movie key={movie.id}>
        <Link to={`/details/${movie.id}`}>
          <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
        </Link>
        <span>{movie.title}</span>
      </Movie>
    ));
  };

  return (
    <Container>
      <div className="movie-banner" style={{ backgroundImage: `url(${movie.backdrop})` }}></div>
      <div className="movie">
        <img src={movie.image} alt={movie.title} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>
            <span className="sinopse">Sinopse: </span>
            {movie.sinopse}
          </span>
          <span className="releaseDate"> Release Date: {movie.releaseDate}</span>
          <Link to="/">
            <button className="back">Go Back</button>
          </Link>
          <div className="cast">
            <h2>Elenco Principal</h2>
            <ul>
                {cast.map((actor) => (
                <li key={actor.id}>
                    <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                    <span>{actor.name}</span>
                </li>
                ))}
            </ul>
        </div>
        </div>
       
      </div>
   

      <div className="similar-movies">
        <h1 className="similar">Filmes Similares</h1>
        <MovieList>
          {renderMovies()}
        </MovieList>

        {visibleMovies < similarMovies.length && (
          <div className="show-more-button-container">
            <button onClick={handleShowMore} className="show-more-button">
              Ver Mais
            </button>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Details;
