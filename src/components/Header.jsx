import React,{useEffect, useState} from 'react'
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setUserLogin, setUserSignOut } from '../features/user/userSlice';
import { auth, provider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from './MobileMenu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [open, setopen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (res) => {
      if (res) {
        dispatch(setUserLogin({
          name: res.displayName,
          email: res.email,
          photo: res.photoURL
        }))
      }
    })

  }, [dispatch,navigate])


  const signIn = async () => {
    const res = await signInWithPopup(auth, provider);
    dispatch(setUserLogin({
      name: res.user.displayName,
      email: res.user.email,
      photo: res.user.photoURL
    }))
    navigate("/");
  }

  const signout = async () => {
    if (!window.confirm("Are you sure to sign out?")) return;
    await signOut(auth);
    dispatch(setUserSignOut());
    navigate("/login");
  }

  return (<>
    <Nav>
      <Link to="/">
        <Logo src={process.env.PUBLIC_URL + "/images/logo.svg"} />
      </Link>
      {
        !userName ? <Login onClick={signIn}>login</Login> :
          <><NavMenu className='d-flex aic'>
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
          </NavMenu>
          <UserImgContainer>
            <UserImg onClick={signout} src={userPhoto} />
            <HamBurger>
              {open?<CloseIcon onClick={()=>setopen(false)} style={{color:"white"}}/>:<MenuIcon style={{color:"white"}} onClick={()=>setopen(true)}/>}
            </HamBurger>
          </UserImgContainer>
          </>
      }
    </Nav>
    <MobileMenu open={open}/>
    </>)
}

export default Header;

const Nav = styled.div`
overflow-x: hidden;
width:100%;
height:70px;
background-color:#090b13;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 25px;
`

const Logo = styled.img`
    height:55px;
 `

const NavMenu = styled.div`
  a{
    color:white;
    text-decoration:none;
    padding:0 15px;
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
  @media only screen and (max-width: 600px) {
    display:none;
  }
`
const UserImgContainer=styled.div`
  display:flex;
  justify-content:end;
  align-items:center;
`
const UserImg = styled.img`
  width:50px;
  height:50px;
  border-radius:50%;
  cursor:pointer;

`

const Login = styled.div`
  color:white;
  text-transform:uppercase;
  border: 1px solid white;
  padding: 8px 16px;
  border-radius:8px;
  letter-spacing:1.5px;

  &:hover{
    background-color:white;
    color:black;
    cursor:pointer;
  }
`

const HamBurger=styled.div`
  margin:0 10px;
  display:none;
  @media only screen and (max-width: 600px) {
    display:block;
  }

`