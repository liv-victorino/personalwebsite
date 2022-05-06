
import mongoose from "mongoose"


//code that connects to the mongodb database
//need async function

dbConnect().catch(err => console.log(err))



let db = {} // this is new - contains all the different models

//let User; - we no longer need this due to defining it in db.User
async function dbConnect(){
await mongoose.connect("mongodb+srv://liverino:HOTEWIG123!@cluster0.2uung.mongodb.net/Questions?retryWrites=true&w=majority")
console.log("connected to db")

//now we make the schema!

 const questionsPostSchema= new mongoose.Schema({
    username: String,
    body: String,
    created_date: Date,
    reply: String
  })

  const blogPostSchema= new mongoose.Schema({
    title: String,
    grabber: String,
    body: String,
    created_date: Date,
  })

//we store a db object full of models i.e. user models
db.Questions = mongoose.model('Question', questionsPostSchema)
db.blogPostSchema = mongoose.model('BlogPost', blogPostSchema)


console.log("added schema and model")

}




// For backend and express
import express from 'express'
const app = express();
import cors from "cors"
import sessions from 'express-session'




//session
const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
  secret: "wtf lol lmao omg o.k.",
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false
}))













//console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
    
    // If you see App is working means
    // backend working properly
});

app.post('/posts', async function(req, res, next){

        try{
        const newPost = new db.Questions({
            body: req.body.body,
            created_date: Date(),
            reply: "",
            username: "ovictor@uw.edu"
        })

        await newPost.save()
        res.send({status: 'success'});

        }catch(error){
            console.log(error)
            res.send({status: 'error', error: 'could not connect to the db'})
        }

})

app.get("/posts", async function(req, res) {
    //console.log("we got to getpost ################################")
    let allQuestions = await db.Questions.find()

    //console.log("the call to get posts yields this stuff + " + allQuestions[])
    res.type("json")
    res.send(allQuestions)

})


//SESSION SHIT SESSION SHIT SESSION SHIT
 


app.post('/reply', async function(req, res){
  //let session = req.session

  console.log(req.body.body)
  console.log(req.body.id)
  try {
      const updateDoc = {
          $set: {
              reply: req.body.body
          },
        };
      await db.Questions.updateOne({_id: req.body.id},updateDoc, {upsert: true})
  } catch (error) {
      
  }
  
})

app.get('/', function(req, res, next) {
  let session = req.session
  if(session.userid){
    res.send('respond with a resource for the user: ' + session.userid);
  } else {
    res.send('ERROR: You must be logged in to see this information!')
  }
});

app.post("/login", function(req, res, next) {
  let session = req.session

  if(session.userid){
    res.send("Error: You are already logged in as " + session.userid)
    return
  }

  //check username and password
  if(req.body.username == "liverino" && req.body.password == "my_password_1"){
    session.userid = "liverino"
    console.log(session)
    res.send("you logged in")
  } else { 
    //not start session
    req.session.destroy()
    res.send("wrong login info")
  }
})

app.post("/logout", function(req, res, next) {
  req.session.destroy()
  res.send("you are logged out")
})










app.listen(5000);

//this is pretty whacky that you can share a database connection? i guess that's what mongoose is for
//export default db; 