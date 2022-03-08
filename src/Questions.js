import './App.css'
import QuestionsForm from './QuestionsForm';
import React, { useState, useEffect } from 'react';


//TODO: write onClick submit function and index.js import? also figure out why not published on ghp

function Questions (){


    const [state, setState] = useState([])
    useEffect(() => {


        const fetchData = async () => {
            const response = await fetch(`https://liv-victorino.com/posts`);
            const newData = await response.json();
            //console.log(JSON.stringify(newData))
            setState(newData)
            //console.log("this isthe state now: " + JSON.stringify(state))
          };
        
          fetchData();
        

    }, [])

    


        //for every question in the list, create a new post and then display it!




    return(

        <div className="postList">
            <h1 style={{color: "red"}}>this page does not allow questions yet. it is here for cool factor.</h1>
            <h2>questions and advice</h2>
            <QuestionsForm></QuestionsForm>

            <br></br>
            <>
            {state.map( d => 
            
                <div>
                <h3>{d.body}</h3>
                posted on: {d.created_date}

                <br></br>
                <br></br>
                </div>
                
                )}        
            </>
        </div>


    )
}

export default Questions;

export { Questions };