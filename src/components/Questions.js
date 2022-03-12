import '../App.css'
import QuestionsForm from './QuestionsForm';
import ReplyForm from './ReplyForm';
import Login from './LoginPage'
import React, { useState, useEffect } from 'react';


//Questions element grabs questions from the database and displays them. 
//It also loads the reply form and the login form.

function Questions (){


    const [state, setState] = useState([])
    const [userState, setUserState] = useState({username: ""})

    
    useEffect(() => {
        try {
            

        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/posts`);
            const newData = await response.json();
            setState(newData)
          };

          fetchData();
        } catch (error) {
            document.getElementById("LoadQConfirmation").innerText = "error" + error
        }

    }, [])

    




        //for every question in the list, create a new post and then display it!

    return(
        
        <div className="postList">
            <h2>questions and advice</h2>
            <h1 id="LoadQConfirmation"></h1>
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