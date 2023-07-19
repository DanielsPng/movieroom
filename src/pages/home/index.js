import React, { useState, useEffect } from 'react';
import { Container, MovieList, Movie } from './styles';
import mouse_down from './assets/icons/mouse-down.svg';
import Ellipse from './assets/icons/Ellipse 1.svg';
import joker from './assets/images/joker-.jpg';
import { key } from "../../config/key.js"
import { Link, useNavigate } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

function Home() {
  const [movies, setMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(8); // Número de filmes a serem exibidos inicialmente
  const increment = 8; // Número de filmes para adicionar quando clicar em "Ver Mais"
  const image_path = 'https://image.tmdb.org/t/p/w500';
  const [searchQuery, setSearchQuery] = useState(''); // Termo de pesquisa
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-Br-US&page=1`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

  const handleShowMore = () => {
    setVisibleMovies(prevVisibleMovies => prevVisibleMovies + increment);

    // Rolar a página para baixo automaticamente após carregar mais filmes
    animateScroll.scrollToBottom();
  };

  const renderMovies = () => {
    const moviesToRender = movies.slice(0, visibleMovies);

    return moviesToRender.map(movie => (
      <Movie key={movie.id}>
        <div>
          <Link to={`/details/${movie.id}`}>
            <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
          </Link>
          <span className='movie-rating'>{movie.vote_average}</span>
        </div>
        {/* <span>{movie.title}</span> */}
      
      </Movie>
    ));
  };

  const searchMovies = () => {
    if (searchQuery.trim() !== '') {
      const searchPagePath = `/search?query=${searchQuery}`;
      navigate(searchPagePath);
    } else {
      // Se a barra de pesquisa estiver vazia, exibir os filmes populares novamente
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-Br-US&page=1`)
        .then(response => response.json())
        .then(data => {
          setMovies(data.results);
          setVisibleMovies(10); // Resetar o estado visibleMovies ao exibir os filmes populares novamente
        });
    }
  };

  return (
    <Container>
      <body>
        <header>
          <nav>
            <div className="mobile-menu">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <ul className="nav-list">
              <li><a className="active" href="#">Home</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About</a></li>
            </ul>
      
          </nav>
        </header>
        <img className="bg" src={joker} alt="" />
        <div className="presentation">
          
          <div className="shadow"></div>

          <div className="glow">
            <img src={Ellipse} alt="" />
          </div>

          <div className="mouse_down">
            <img src={mouse_down} alt="" />
          </div>

          <div className="presentation__text">
            <h1>My Movie Room</h1>
            <p>Explore o mundo mágico do cinema!</p>
            <div className="search-bar">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Procure Filmes"
              />
              <button onClick={searchMovies}>Pesquisar</button>
            </div>
          </div>
          
        </div>

        <div className="best-movies">
          <h1>Popular no momento</h1>
          <MovieList>
            {renderMovies()}
          </MovieList>
          {visibleMovies < movies.length && (
            <div className="show-more-button-container">
              <button onClick={handleShowMore} className="show-more-button">
                Ver Mais
              </button>
            </div>
          )}
        </div>

        <script src="./assets/script/mobile_menu.js"></script>
      </body>
    </Container>
  );
}

export default Home;
