import '../App.css'
import QuestionsForm from './QuestionsForm';
import ReplyForm from './ReplyForm';
import Login from './LoginPage'
import React, { useState, useEffect } from 'react';


//TODO: write onClick submit function and index.js import? also figure out why not published on ghp

function Questions (){


    const [state, setState] = useState([])
    const [userState, setUserState] = useState({username: ""})

    
    useEffect(() => {

/*         const isLoggedIn = async () => {
            const response = await fetch(`https://personalsite-backend.herokuapp.com/isAdmin`);
            const newData = await response.json();

            console.log(JSON.stringify(newData))
          };
         */
        const fetchData = async () => {
            const response = await fetch(`https://personalsite-backend.herokuapp.com/posts`);
            const newData = await response.json();
            //console.log(JSON.stringify(newData))
            setState(newData)
            //console.log("this isthe state now: " + JSON.stringify(state))
          };


          //sLoggedIn();

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
            
                <div className="post">
                <h3>{d.body}</h3>
                posted on: {d.created_date}
                <br></br>
                replies: <div style={{color: "blue"}}>{d.reply}</div>
                <div className="admin-reply">
                    {console.log("the userstate is " + JSON.stringify(userState.username))}
            
               {
               console.log(JSON.stringify(userState.username) === "liverino")}{
               userState.username === "liverino" &&
               
               
               <ReplyForm post={d._id}></ReplyForm>     
               
               }  
                    </div>
                <br></br>
                </div>
                
                )}        
            </>

            <Login user={userState} userChange={setUserState}></Login>
        </div>


    )
}

export default Questions;

export { Questions };