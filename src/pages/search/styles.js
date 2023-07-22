import styled from 'styled-components'

export const Container = styled.div`
  .movie-banner {
    mask-image: linear-gradient(rgb(0 0 0 / 93%) 0%, rgb(0 0 0 / 88%) 50%, rgb(0 0 0 / 0%) 100%);
    position: absolute;
    width: 100%;
    height: 60vh; /* Ajuste a altura conforme necessário */
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 30%;
    z-index: -1;
   }

   .search{
      padding: 4rem 0;
   }


  @media (max-width: 900px) {
    padding: 2rem 0rem;

    .movie {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    h1 {
      font-size: 30px;
      margin: 0;
      text-align: center;
    }

    .details {
      margin-left: 0;
    }

    .back {
      position: relative;
      padding: 0.7rem 4rem;
      margin-top: 1rem;
      align-items: center;
    }
  }

  @media (min-width: 900px) {

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
    font-size: 20px;
    display: flex;
    justify-content: center;

  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
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
    margin-bottom: 1rem;
    font-weight: lighter;
  }

  
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: white;
    opacity: 40%;
    margin-bottom: 3rem;
  }
`

export const MovieList = styled.ul`
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  list-style: none;
  column-gap: 3rem;
  row-gap: 4rem;
  padding-bottom: 20px;
  margin-left: 10rem;
  margin-right: 10rem;
`

export const Movie = styled.li`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    filter: drop-shadow(3px 0px 9px rgba(0, 0, 0, 0.36));
    border-radius: 10px;
    margin-bottom: 10px;
  }

  span {
    font-weight: light;
    font-size: 80%;
    text-align: center;
  }

  a {
    transition: all 0.3s;
  }

`