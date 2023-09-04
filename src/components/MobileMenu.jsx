import React from 'react'
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Link } from 'react-router-dom';

function MobileMenu({open}) {
    return (
        <MenuContainer open={open}>
            {/*eslint-disable-next-line  */}
            <Link to="/" className='d-flex aic'>
                <HomeIcon />
                <p>HOME</p>
            </Link>
            {/*eslint-disable-next-line  */}
            <Link to="/movies" className='d-flex aic'>
                <SearchIcon />
                <p>SEARCH</p>
            </Link >
            {/*eslint-disable-next-line  */}
            <Link to="/movies" className='d-flex aic'>
                <AddIcon />
                <p>WATCHLIST</p>
            </Link >
            {/*eslint-disable-next-line  */}
            <Link to="/movies" className='d-flex aic'>
                <StarIcon />
                <p>ORIGINALS</p>
            </Link >
            {/*eslint-disable-next-line  */}
            <Link to="/movies" className='d-flex aic'>
                <GroupWorkIcon />
                <p>MOVIES</p>
            </Link >
            {/*eslint-disable-next-line  */}
            <Link to="/movies" className='d-flex aic'>
                <LiveTvIcon />
                <p>SERIES</p>
            </Link >
        </MenuContainer>
    )
}

export default MobileMenu

const MenuContainer = styled.div`
    background-color:#090b13;
    width:80vw;
    position:absolute;
    right:0;
    bottom:0;
    top:70px;
    z-index:20;
    transform:translate(${props=>props.open?"0%":"100%"});
    transition:all 0.3s ease-in-out;
    a{
        color:white;
        text-decoration:none;
        padding:0 15px;
        margin:15px 0;
        p{
          padding:4px 3px;  
          letter-spacing:1px;
          position:relative;
          &:after{
            content:"";
            height:1.5px;
            position:absolute;
            background-color:white;
            left:0;
            right:0;
            bottom:0;
            border-radius:50px;
            transition: all 200ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            tranform-origin:left center;
            transform:scaleX(0);
            opacity:0;
          }
        }
        &:hover{
          p:after{
            transform:scaleX(1);
            opacity:1;
          }
        }
      }
`