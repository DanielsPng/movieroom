import styled from 'styled-components'

export const Container = styled.div`

.movie-banner {
    -webkit-mask-image: linear-gradient(rgba(0, 0, 0, 0.863) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
     mask-image: linear-gradient(rgba(0, 0, 0, 0.863) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    position: absolute;
    width: 100%;
    height: 50vh; /* Ajuste a altura conforme necessário */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 20%;
    z-index: -1;
  
}
  @media (max-width: 900px) {
    

    .movie {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    h1 {
      font-size: 30px;
      margin: 0;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .details {
      margin-left: 0;
      
    }

    .back {
      position: relative;
      padding: 0.7rem 4rem;
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 900px) {
    .details {
      margin-left: 4rem;
      align-items: center;
    }

    h1 {
      font-size: 60px;
    }

    .back {
      position: absolute;
      padding: 0.7rem 2rem;
      top: 3rem;
      left: 3rem;
    }
  }

  h1 {
    font-size: 40px;
    margin: 3rem 0;
    text-align: left;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;
  }

  img {
    width: 280px;
    border-radius: 10px;
  }

  .details {
    color: white;
    flex-direction: column;
    align-items: center;
    max-width: 70%;
  }

  .back {
    background: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 4rem;
    color: white;
    font-size: 100%;
    transition: 0.3s;

    &:hover {
      background: #5848c2;
    }
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
    font-weight: lighter;
  }

  .sinopse {
    font-weight: bold;
  }


  .releaseDate {
    font-weight: light;
    opacity: 0.5;
  }

  .cast {
    margin-top: 20px;
  h2 {
    font-size: 20px;
    margin-bottom: 16px;
    color: white;
 
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 16px;
      
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
      }

      span {
        margin-top: 8px;
        text-align: center;
        color: white;
      }
    }
  }
}
  .show-more-button-container {
    display: flex;
    justify-content: center;
    margin: 20px;
  }

  .show-more-button {
    padding: 8px 16px;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    color: #6654da;
    font-size: 100%;
    transition: 0.3s;

    &:hover {
        color: whitesmoke;
    }
  }

  .similar {
    font-size: 30px;
    align-items: center;
    justify-content: center;
    display: flex;


  }

`

export const MovieList = styled.ul`
   
   font-size: 1.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    list-style: none;
    column-gap: 2rem;
    row-gap: 3rem;
    padding-bottom: 20px;
    /* padding-top: 10vh; */
    margin-left: 10rem;
    margin-right: 10rem;
`

export const Movie = styled.li`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 160px;
    filter: drop-shadow(3px 0px 9px rgba(0, 0, 0, 0.36));
    border-radius: 10px;
    margin-bottom: 10px;
  }

  span {
    font-weight: light;
    font-size: 80%;
    text-align: center;
  }


`