import React, { useState, useEffect } from 'react';
import { Container, MovieList, Movie } from './styles';
import mouse_down from './assets/icons/mouse-down.svg';
import Ellipse from './assets/icons/Ellipse 1.svg';
import joker from './assets/images/joker-.jpg';
import { key } from "../../config/key.js"
import { Link } from 'react-router-dom';



function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {

        fetch( `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-Br-US&page=1`)
          .then(response => response.json())
          .then(data => setMovies(data.results))
    }, [])
    
    return (
        <Container>
            <body>
        
            <header>
        <nav>
            <div class="mobile-menu">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <ul class="nav-list">
                <li><a class="active" href="#">Home</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    </header>
    <div class="presentation">
        <img class="bg" src={joker} alt="" />
        <div class="shadow"></div>

        <div class="glow">
            <img src={Ellipse} alt=""/>
        </div>

        <div class="mouse_down">
            <img src={mouse_down} alt=""/>
        </div>


        <div class="presentation__text">
            <h1>My Movie Room</h1>
            <p>Explore the magical world of cinema!</p>
        </div>
    </div>

    <div class="best-movies">
        <h1>Popular</h1>
        <MovieList>

            {movies.map(movie => {
                return (
                    <Movie key={movie.id}>
                        <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
                        <span>{movie.title}</span>
                     </Movie>
                )
            })}
        </MovieList>
    </div>

    <script src="./assets/script/mobile_menu.js"></script>
            </body>
        </Container>
    )
}
export default Home;