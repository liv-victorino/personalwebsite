//move all sessions middlware here...
import express from 'express'
import cors from "cors"
import sessions from 'express-session'

var app = express();

//session
const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
  secret: "wtf lol lmao omg o.k.",
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: true
}))

//anything that calls login must go through 3000 not 5000 i guess

app.post("/login", async function(req, res, next) {
    let session = req.session
  
    if(session.userid){
      res.send("Error: You are already logged in as " + session.userid)
      return
    }
  
    //check username and password
    if(req.body.username == "liverino" && req.body.password == "123"){
      session.userid = "liverino"
      req.session.save()
      console.log("compare session" +  JSON.stringify(session))
      res.send(session)
  
    } else { 
      //not start session
      req.session.destroy()
      console.log("session destroyed")
      res.send("wrong login info, session destroyed")
    }
  })
   
  app.post("/logout", function(req, res, next) {
  let session = req.session
   console.log("this session will be destroyed" + JSON.stringify(session))
  
    req.session.destroy()
   // console.log("what is stored in req.session after destroy?" + req.session)
    res.send("you are logged out")
  })
  
  
  
  app.get('/isAdmin', function(req, res){
    let session = req.session
  
    if(session.userid){
      res.send(session.userid)
    }else{
      res.send(session)
    }
  
  
  })