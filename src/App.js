import './App.css';
import React, { useState } from 'react';
//import { render } from 'react-dom';
import { BrowserRouter, Route, Routes} from 'react-router-dom'; 
import NewBlog from './components/NewBlog'
import LoginPage from './components/LoginPage'
//import express from "express"
import Questions from "./components/Questions"
import { NavLink } from 'react-router-dom'
{/*  //change to navelink,  */}

function App() {
  const [userSubmission, setSubmission] = useState();
  //showing={isShown} changeShowing={setIsShown}
  return (
    <div className="App">
      <h1>Alt-Z; hello I'm Liv</h1>

      <div> 
        <div className="linkList">visit some of my online stuff:</div>
        <a className="link" href="https://open.spotify.com/artist/3YIrk6wfKAjdNp3hwaZPyQ?si=MhN4l-TXSP6lhHV7MDvpZQ">Spotify :)</a>
        <a className="link" href="https://livvictorino.bandcamp.com/album/sheer-force-of-will">Bandcamp :^)</a>
        <a className="link" href="https://www.youtube.com/channel/UC2Dlu_LLlFjDIw2zr3Abm2g">YouTube ,':)</a>
        <a className='link' style={{color: "#C0DFFF"}} href="https://www.liv-victorino.com/login">ADMIN</a>
        <a className='link' style={{color: "#C0DFFF"}} href="https://www.liv-victorino.com/questions">QUESTIONS</a>
      </div>
       
      <hr></hr>
      <div className='postlist'>
      <BrowserRouter>
      <Routes>
            <Route exact path="/" element={<NewBlog />}></Route>
            <Route exact path="/questions" element={<Questions questionsMock={userSubmission} changeSubmission={setSubmission}></Questions>}></Route>
            <Route exact path="/login" element={<LoginPage></LoginPage>}></Route>
      </Routes>


      </BrowserRouter>
      </div>
      </div>
  );
}

export default App;
