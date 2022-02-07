import './App.css'
import React from 'react';
//TODO: write onClick submit function and index.js import? also figure out why not published on ghp

function Questions (){


    return(

        <div className="post">
            <h1 style={{color: "red"}}>this page does not allow questions yet. it is here for cool factor.</h1>
            <h2>questions and advice</h2>
            <input type="text" placeholder="keep it real"/>
            <br></br>
            <button>submit</button>
        </div>


    )
}

export default Questions;

export { Questions };