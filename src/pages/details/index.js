import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { key } from "../../config/key"
import { Container, Movie, MovieList } from "./styles"

function Details(){

    const { id } = useParams()
    
    const [movie, setMovies] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {

        fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=pt-Br-US&page=1`)
          .then(response => response.json())
          .then(data => {

            const { title, poster_path, genres, release_date, overview} = data

            const movie = {

                id,
                title,
                genres,
                sinopse: overview,
                image: `${image_path}${poster_path}`,
                releaseDate: release_date
            }

            setMovies(movie)
            console.log(movie)
        })

    }, [id])

    return (
        <Container>
             <div className="movie">
             
                <img src={movie.image} alt={movie.title}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span> <span className="sinopse">Sinopse: </span>{movie.sinopse}</span>
                    <span className="realeseDate">Realese Date: {movie.releaseDate}</span>
                    <Link to="/"><button>Go Back</button></Link>
                </div>
             </div>

             {/* <div class="best-movies">
                <h1>Filmes Similares</h1>
                <MovieList>

                    {movie.map(movie => {
                        return (
                            <Movie key={movie.id}>
                                <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })}
                </MovieList>
             </div> */}
        </Container>


    )
}

export default Details