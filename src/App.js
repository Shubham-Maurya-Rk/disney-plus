import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import Login from './components/Login';
import {  collection, onSnapshot, query } from 'firebase/firestore';
import db from './firebase';
import './App.css';
import { useDispatch } from 'react-redux';
import { setMovies } from './features/movies/movieSlice';
import Movies from './components/Movies';

const coll=collection(db,"movies");
const q=query(coll);
const movies=[]

function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    const unsubscribe=onSnapshot(q,snapshot=>{
      snapshot.forEach(movie => {
        movies.push({id:movie.id,...movie.data()})
      });
      dispatch(setMovies(movies));
    })
    return () =>unsubscribe();
    
    /* eslint-disable-next-line*/
  }, [])
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Header/>
        <Routes >
          <Route exact path='/' element={<Home/>}/>
          <Route exact path="details/:id" element={<Details/>}/>
          <Route exact path="login" element={<Login/>}/>
          <Route exact path="movies" element={<Movies/>}/>
        </Routes>
      </Router>
  );
}

export default App;
