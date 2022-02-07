import './App.css';
import React, { useState } from 'react';
//import { render } from 'react-dom';
import { Route, Switch} from 'react-router-dom'; 
import Blog from './Blog'
//import express from "express"
import Questions from "./Questions"


//firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF13vPjH5irg6Lkou-jdOv1qSL3bP44zA",
  authDomain: "personalsite-f5ed9.firebaseapp.com",
  projectId: "personalsite-f5ed9",
  storageBucket: "personalsite-f5ed9.appspot.com",
  messagingSenderId: "700002163876",
  appId: "1:700002163876:web:38f697fe84abbbc0471a31",
  measurementId: "G-R0YN8GBV7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





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
        <a className='link' style={{color: "#C0DFFF"}} href="http://liv-victorino.com/questions">SECRET</a>
      </div>
       
      <hr></hr>
      <div className='postlist'>
      <Switch>
            <Route path="/" element={<Blog />}></Route>
            <Route path="/questions" element={<Questions questionsMock={userSubmission} changeSubmission={setSubmission}></Questions>}></Route>
      </Switch>
      </div>
      </div>
  );
}

export default App;
