import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { key } from "../../config/key";
import { Container, Movie, MovieList } from "./styles";
import { animateScroll } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import YouTube from "react-youtube";

function CastCarousel({ cast }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cast.map((actor) => (
        <div key={actor.id}>
          <img
            className="cast"
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt={actor.name}
          />
          <span className="name_act">{actor.name}</span>
        </div>
      ))}
    </Slider>
  );
}

function Details() {
  const { id } = useParams();
  const [videoKey, setVideoKey] = useState(""); // Declare the videoKey state variable

  // Função para obter a chave do vídeo do trailer usando a API do TMDB
  const fetchMovieVideo = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
      );
      const videos = response.data.results;
      const trailer = videos.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      if (trailer) {
        setVideoKey(trailer.key);
      }
    } catch (error) {
      console.error("Error fetching movie video:", error);
    }
  };

  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(4);
  const increment = 20;
  const image_path = "https://image.tmdb.org/t/p/original";
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState("");
  const [directorImage, setDirectorImage] = useState("");
  const [voteAverage, setVoteAverage] = useState("");
  const initialShowFullSynopsis =
    localStorage.getItem("showFullSynopsis") === "true";
  const [showFullSynopsis, setShowFullSynopsis] = useState(
    initialShowFullSynopsis
  );
  const maxSynopsisLength = 150 && 155;

  const toggleSynopsis = () => {
    setShowFullSynopsis(!showFullSynopsis);
  };
  useEffect(() => {
    localStorage.setItem("showFullSynopsis", showFullSynopsis.toString());
  }, [showFullSynopsis]);

  useEffect(() => {
    animateScroll.scrollToTop();

    fetchMovieVideo();

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const mainCast = data.cast.filter((member) => member.order < 15);
        setCast(mainCast);
        console.log(mainCast);
        const directorInfo = data.crew.find(
          (member) => member.job === "Director"
        );
        // Verificar se encontrou o diretor e definir o nome no estado
        if (directorInfo) {
          setDirector(directorInfo.name);
          setDirectorImage(directorInfo.profile_path);
        } else {
          setDirector("Director Not Found");
        }
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=pt-Br-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const {
          title,
          poster_path,
          backdrop_path,
          genres,
          release_date,
          overview,
        } = data;
        const genreNames = genres.map((genre) => genre.name);
        const voteAverage = data.vote_average.toFixed(2); // Formatação para 3 dígitos após o ponto
        setVoteAverage(voteAverage);
        const movieData = {
          id,
          title,
          genres: genreNames.join(", "),
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

    setVisibleMovies(4);
  }, [id]);

  const handleShowMore = () => {
    const newVisibleQuantity = visibleMovies + increment;

    setVisibleMovies(newVisibleQuantity);

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

  const openTrailerLink = () => {
    if (videoKey) {
      window.open(`https://www.youtube.com/watch?v=${videoKey}`, "_blank");
    }
  };

  return (
    <Container>
      <div
        className="movie-banner"
        style={{ backgroundImage: `url(${movie.backdrop})` }}
      ></div>
      <div className="movie">
        <div className="movie-image">
          <img src={movie.image} alt={movie.title} />
          {videoKey && (
            <div className="trailer-button-container">
              <button className="trailer-button" onClick={openTrailerLink}>
                Assistir Trailer
              </button>
            </div>
          )}
        </div>

        <div className="details">
          <h1>{movie.title}</h1>
          <p className="genres">{movie.genres}</p>
          {voteAverage && (
            <p className="vote-average" title="Avaliação do público">
              {voteAverage}
            </p>
          )}
          <span>
            <span className="sinopse">Sinopse: </span>
            {/* Verifica se a sinopse existe antes de usar a função slice */}
            {movie.sinopse
              ? showFullSynopsis
                ? movie.sinopse
                : `${movie.sinopse.slice(0, maxSynopsisLength)}...`
              : "Sinopse não disponível"}
            {/* Mostrar o botão "Ler Mais" se a sinopse existir e tiver mais de maxSynopsisLength caracteres */}
            {movie.sinopse && movie.sinopse.length > maxSynopsisLength && (
              <button onClick={toggleSynopsis} className="read-more-button">
                {showFullSynopsis ? "Ler Menos" : "Ler Mais"}
              </button>
            )}
          </span>
          <span className="releaseDate"> {movie.releaseDate}</span>
          <p className="director">Director: {director}</p>
          {directorImage && (
            <img
              className="director-image"
              src={`https://image.tmdb.org/t/p/w400${directorImage}`}
              alt="Director"
            />
          )}

          <div className="cast">
            <h2>Elenco Principal</h2>
            <CastCarousel cast={cast} />
          </div>
        </div>
      </div>
      {/* Render the YouTube video trailer
      {videoKey && (
      <div className="video-trailer"> 
      <h2>Trailer</h2>
      <div className="video-container"> 
        <YouTube videoId={videoKey} />
      </div>
      </div>
    )} */}

      <div className="similar-movies">
        <h1 className="similar">Filmes Similares</h1>
        <MovieList>{renderMovies()}</MovieList>

        {visibleMovies < similarMovies.length && (
          <div className="show-more-button-container">
            <button onClick={handleShowMore} className="show-more-button">
              Ver Mais
            </button>
          </div>
        )}
      </div>
      <Link to="/">
        <button className="back">Go Back</button>
      </Link>
    </Container>
  );
}

export default Details;
