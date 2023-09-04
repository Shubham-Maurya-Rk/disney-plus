import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GroupsIcon from '@mui/icons-material/Groups';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import db from '../firebase';

function genres(str){
  if(str===undefined)return "Animation, etc.";
  let r="";
  str.forEach(s=>{
    r+=s+", ";
  })
  r+="etc.";
  return r;
}

function Details() {
  const {id}=useParams();
  const coll=collection(db,"movies")
  const q=query(coll,where("id","==",id));
  const [movie, setmovie] = useState({});
  useEffect(() => {
    const unsubscribe=onSnapshot(q,snapshot=>{
      snapshot.forEach(mov => {
        setmovie(mov.data());
      });
      return()=>unsubscribe();
    })
  })
  
  return (
    <Container>
      {
        movie && (<><Background>
          <img src={movie.bg} alt="bg" />
        </Background>
        <ImageTitle>
          <img src={process.env.PUBLIC_URL+'/images/disney.png'} alt="Disney"/>
        </ImageTitle>
        <h1>{movie.title}
        </h1>
        <Controls>
          <PlayButton><PlayArrowIcon/><span> Play</span> </PlayButton>
          <TrailerButton><PlayArrowIcon/><span> Trailer</span> </TrailerButton>
          <AddButton><AddIcon/></AddButton>
          <GroupButton><GroupsIcon/></GroupButton>
        </Controls>
        <Subtitle>
          {movie.releaseDate} | &nbsp;Imdb Rating: <b>{movie.imdbRating}</b>  &nbsp;| {genres(movie.genres)}
        </Subtitle>
        <Desp>
          {movie.storyline}
        </Desp></>)
      }
    </Container>
  )
}

export default Details;

const Container=styled.div`
min-height:calc(100vh-70px);
padding:0 7vw;
h1{
  margin-top:-60px;
  margin-bottom:10px;
  color:#cec7c7;
  width:30vw;
  text-align:center;
  font-size:3em;
  font-family: 'Great Vibes', cursive;
}
`

const Background=styled.div`
  position:fixed;
  top:0;right:0;bottom:0;left:0;
  z-index:-1;
  img{
    opacity:0.8;
    width:100%;
    height:100%;
    object-fit:cover;
  }
  &:after {
    content:'';
    position:absolute;
    left:0px;
    top:0px;
    width:100%;
    height:100%;
    background: rgba(0, 0, 0, 0.4);
  }
`
const ImageTitle=styled.div`
  height:30vh;
  width:30vw;
  img{
    width:100%;
    height:100%;
    object-fit:contain;
  }

`

const Controls=styled.div`
display:flex;
align-items:center;
`

const PlayButton=styled.button`
display:flex;
align-item:center;
justify-content:center;
border-radius:5px;
border:none;
margin-right:10px;
  font-weight:600;
  padding:10px 30px;
  font-size:18px;
  opacity:0.8;
  cursor:pointer;
  text-transform:uppercase;
  @media only screen and (max-width: 600px) {
    padding:10px;
  }
`
const TrailerButton=styled(PlayButton)`
  border:2px solid white;
  color:white;
  background-color:rgba(0,0,0,0.5);
`
const AddButton=styled.button`
display:flex;
align-items:center;
justify-content:center;
  width:40px;
  height:40px;
  border-radius:50%;
  margin-right:10px;
  cursor:pointer;
  border:2px solid white;
color:white;
background-color:rgba(0,0,0,0.8);
`
const GroupButton=styled(AddButton)`

`

const Subtitle=styled.div`
  color:rgb(249,249,249);
  margin-top:30px;
  font-size:15px;
`

const Desp=styled.div`
color:rgb(249,249,249);
  margin-top:30px;
  font-size:20px;
  line-height:1.4;
  text-align:justify;
`