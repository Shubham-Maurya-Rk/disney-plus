import React from 'react';
import styled from 'styled-components';
import { selectMovies } from '../features/movies/movieSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';

function Movies() {
  const movies=useSelector(selectMovies);
  return (
    <Container>
        <h2>Recommended for you</h2>
        <Content>
            {movies && movies.map(movie=>{
                return (
                <Wrap key={movie.id}>
                    <Link to={`/details/${movie.id}`}>
                        <img src={movie.posterurl} id={movie.id} alt="movies" />
                    </Link>
                </Wrap>
                )
            })
            }
        </Content>
    </Container>
  )
}

export default Movies

const Container=styled.div`
    padding:0 8px;
    margin:30px 0;
    color:white;
`
const Content=styled.div`
    margin-top:20px;
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));
    @media only screen and (max-width: 600px) {
        grid-template-columns:repeat(2,minmax(0,1fr)); 
    }
`
const Wrap=styled.div`
    border-radius:20px;
    border:4px solid rgba(249,249,249,0.1);
    transition:all 250ms;
    -webkit-box-shadow: 0px 35px 40px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 35px 40px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 35px 40px -10px rgba(0,0,0,0.75);
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:20px;
    }
    &:hover{
        transform:scale(1.02);
        border:4px solid white;
        -webkit-box-shadow: 0px 40px 45px -10px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 40px 45px -10px rgba(0,0,0,0.75);
        box-shadow: 0px 40px 45px -10px rgba(0,0,0,0.75);
    }
`