

//###################### DATABASE CONNECTION ##################3
import mongoose from "mongoose"

//code that connects to the mongodb database
//need async function

dbConnect().catch(err => console.log(err))

let db = {} // this is new - contains all the different models

//we no longer need this due to defining it in db.User
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
    body: String,
    created_date: Date,
  })

//we store a db object full of models i.e. user models
db.Questions = mongoose.model('Question', questionsPostSchema)
db.blogPostSchema = mongoose.model('BlogPost', blogPostSchema)


console.log("added schema and model")

}


//###################### SESSION #######################
// For backend and express
import express from 'express'
import cors from "cors"
import sessions from 'express-session'

//server must reply with appropriate headers i guess


const app = express();


//session
const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
  secret: "wtf lol lmao omg o.k.",
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: true
}))


app.use(express.json());
app.use(cors());



//###################### ENDPOINTS #######################

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


//###### Blog Post Endpoints ######

app.post('/addblogpost', async function(req, res, next){

  try{
  const newPost = new db.blogPostSchema({
      body: req.body.body,
      created_date: Date(),
      title: req.body.title,
  })

  await newPost.save()
  res.send({status: 'success'});

  }catch(error){
      console.log(error)
      res.send({status: 'error', error: 'could not connect to the db'})
  }

})

app.get("/addblogpost", async function(req, res) {
  //console.log("we got to getpost ################################")
  let allPosts = await db.blogPostSchema.find()

  //console.log("the call to get posts yields this stuff + " + allQuestions[])
  res.type("json")
  res.send(allPosts)

})

//###### Question Endpoints ######


app.get("/posts", async function(req, res) {
    //console.log("we got to getpost ################################")
    let allQuestions = await db.Questions.find()

    //console.log("the call to get posts yields this stuff + " + allQuestions[])
    res.type("json")
    res.send(allQuestions)

})

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




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Example app listening at http://localhost:PORT')
})



//this is pretty whacky that you can share a database connection? i guess that's what mongoose is for
//export default db; 