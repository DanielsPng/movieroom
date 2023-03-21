import styled  from 'styled-components'

export const Container = styled.div `


    padding: 8rem;


    @media (max-width: 900px) {

        padding: 2rem 0rem;
        .movie{
            display: flex;
            flex-direction: column;
            align-items: flex-start;

        }

        h1{
            font-size: 30px;
            margin: 0;
            text-align: center;

        }

        .details{
            margin-left: 0;
        }

        button{
            position: relative;
            padding: 0.7rem 4rem;
            margin-top: 1rem;
            align-items: center;
        }

    }

     @media (min-width: 900px) {
        .details{
            margin-left: 4rem;
            align-items: center;
        }

        h1{
            font-size: 60px;
        }

        button{
            position: absolute;
            padding: .7rem 2rem;
            top: 3rem;
            left: 3rem;

        }
    }

    
 

    h1{
        margin: 3rem 0;
    }

    .movie{
        display: flex;
        align-items: center;
        justify-content: center;

    }

    img {
        width: 300px;
        border-radius: 10px;

    }
    

    .details{
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 50%;
    }

   

    button{
        background: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 4rem;
        color: white;
        font-size: 100%;
        transition: 0.3s;
    }

    button:hover{
        background: #5848c2;
    }

    span {
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 110%;
        font-weight: lighter;
    }

    .sinopse{
        font-weight: bold;
    }

    .realeseDate{
        font-weight: light;
        opacity: 0.5;
    }


`

export const MovieList = styled.ul `
     
    font-size: 1.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    list-style: none;
    column-gap: 3rem;
    row-gap: 4rem;
    padding-bottom: 20px;
    /* padding-top: 10vh; */
    margin-left: 10rem;
    margin-right: 10rem;
  

    
 `

 export const Movie = styled.li `

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

    span{
        font-weight: light;
        font-size: 80%;
        text-align: center;
    }


    a{
        transition: all 0.3s;
    }

    a:hover{
        filter: drop-shadow(3px 0px 9px rgba(0, 0, 0, 0.1));
        transform: scale(1.1);
    }
`