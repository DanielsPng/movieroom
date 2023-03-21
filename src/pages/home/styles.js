import styled from 'styled-components'
import joker from './assets/images/joker-.jpg'

export const Container = styled.div `
    header {
        position: absolute;
        width: 100%;
        height: 80px;
        z-index: 1;
    }
    
    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: system-ui, -apple-system, Helvetica, Arial, sans-serif;
        background: none;
        gap: 30px;
        height: 10vh;
        width: 100%;
    }
    nav .logo {
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        transition: all 0.4s ease-in-out;
    }
    nav .logo img {
        max-width: 120px;
        padding: 10px;
        cursor: pointer;
    }
    nav a {
        text-decoration: none;
        color: beige;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 19px;
        padding: 0.75rem 1rem;
        background-size: 0 1px, 0 0;
        background-position: 50% 100%;
        background-repeat: no-repeat;
    }

    @media (min-width: 1500px) {
        nav a {
        font-size: 24px;
        }
    }

    nav a:hover {
        color: #c1a6db;
        transition: 0.2s ease-in-out;
    }
    nav a.active {
        color: #1E1621;
    }
    nav .nav-list {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        height: 100%;
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0 8px 32px 0 rgba(24, 24, 24, 0.415);
        -webkit-backdrop-filter: blur(5px);
                backdrop-filter: blur(5px);
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
    }
    
    nav .nav-list.active {
        transform: translateY(0);
        z-index: 1;
        top: 0;
    }
    
    .mobile-menu {
        display: none;
        cursor: pointer;
        z-index: 2;
    }
    .mobile-menu > div {
        width: 32px;
        height: 2px;
        background: #fff;
        margin: 8px;
        transition: 0.3s;
    }
    .mobile-menu.active .line1 {
        transform: rotate(-45deg) translate(-8px, 8px);
    }
    .mobile-menu.active .line2 {
        opacity: 0;
    }
    .mobile-menu.active .line3 {
        transform: rotate(45deg) translate(-5px, -7px);
    }
    
    @media (max-width: 900px) {
        header {
        height: 100%;
        }
        .nav-list {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(54, 54, 54, 0.2);
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(5px);
        flex-direction: column;
        align-items: center;
        gap: 15%;
        justify-content: center;
        transform: translateY(-100%);
        transition: transform 0.3s ease-in;
        }

        .nav-list > li {
        margin-left: none;
        }
        .mobile-menu {
        display: block;
        }
    }
    @keyframes navLinkFade {
        from {
        opacity: 0;
        transform: translateX(50px);
        }
        to {
        opacity: 1;
        transform: translateX(0);
        }
    }
    .presentation {
        -webkit-mask-image: linear-gradient(rgba(0, 0, 0, 0.863) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
                mask-image: linear-gradient(rgba(0, 0, 0, 0.863) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        justify-content: center;
        overflow: hidden;
        height: 100vh;
        display: flex;
        align-items: center;
        gap: 5rem;
    }
    @media (max-width: 900px) {
        .presentation {
        background-size: 1100px;
        }
    }

    .presentation .glow {
        z-index: 1;
        position: absolute;
        left: -20%;
        z-index: -1;
    }
    .presentation .mouse_down {
        position: absolute;
        top: 85%;
    }
    .presentation .mouse_down img {
        width: 60%;
    }
    .presentation .presentation__text {
        z-index: 4;
        top: 4rem;
        position: absolute;
        padding: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .presentation .bg{
        opacity: 70%;
        position: absolute;
        z-index: 0;
        background-size: cover;
        width: 1790px
    }

    @media (max-width: 900px) {
        .presentation .bg {
            position: absolute;
            left: -600px;
            width: 1500px;

        }
    }


    @media (max-width: 900px) {
        .presentation .presentation__text {
        padding: 0;
        top: 13rem;
        }
    }

    @media (min-width: 1500px) {
        .presentation .presentation__text {
        padding: 0;
        top: 17rem;
        }
    }

    .presentation .presentation__text h1 {
        color: white;
        font-size: 3rem;
        line-height: 5rem;
    }
    @media (max-width: 900px) {
        .presentation .presentation__text h1 {
        font-size: 2.5rem;
        }
    }

    @media (min-width: 1500px) {
        .presentation .presentation__text h1 {
        font-size: 4rem;
        }
    }

    .presentation .presentation__text p {
        color: rgba(255, 255, 255, 0.877);
        font-weight: lighter;
        font-size: 1.5rem;
        text-align: center;
        width: 60%;
    }
    
    .best-movies {
        padding-top: 30px;
        align-items: center;
    }
    .best-movies h1 {
        font-size: 2rem;
        display: flex;
        justify-content: center;
        color: #fff;
        margin-bottom: 4rem;
    }

    







    /*# sourceMappingURL=style.css.map */
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

    @media (max-width: 900px) {
        margin-left: 5rem;
        margin-right: 5rem
    }
  

    
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