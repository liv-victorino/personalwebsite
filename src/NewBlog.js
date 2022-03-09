import './App.css'
import AddBlogPost from './AddBlogPost';

import React, { useState, useEffect } from 'react';


//TODO: write onClick submit function and index.js import? also figure out why not published on ghp

function NewBlog (){


    const [state, setState] = useState([])
    //const [userState, setUserState] = useState()

    useEffect(() => {


        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/addblogpost`);
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

            <h2>blog</h2>
            <AddBlogPost></AddBlogPost>

            <br></br>
            <>
            {state.map( d => 
            
                <div>
                <h3>{d.title}</h3>
                posted on: {d.created_date}
                <div>{d.body}</div>
                <br></br>
                </div>
                
                )}        
            </>
        </div>


    )
}

export default NewBlog;

export { NewBlog };