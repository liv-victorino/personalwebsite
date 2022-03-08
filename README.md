## Info 441 Final Project: Blog and Advice Column
## Olivia Victorino

# Introduction
My hobby outside of school is being a performer. I like to play and record music for my friends. I’d like to expand the interaction between myself and my friends to an online sphere, namely through a personal website. My target audience are those who enjoy reading blogs and also enjoy listening to my music. My idea is to create an advice column - a two-way online interaction platform between myself and an audience. Visitors have the option of creating a unique username and password, and have questions be associated with their account. They also have the option of posting anonymously. I would like to build it on my own because part of my philosophy, which carries into my music, is DIY. As a developer, I want to build this app in order to strengthen my understanding of the deployment side of web development, in a real-life higher stakes environment. 

# Diagram
![diagram](https://github.com/liv-victorino/personalwebsite/blob/heroku/readme/diagram.png)

# Priority List
![priority-list](https://github.com/liv-victorino/personalwebsite/blob/heroku/readme/Priority%20LIst.PNG)

# Endpoints
- /admin - for myself and other “bloggers”, if I were to duplicate this project for someone else
- /questions - to load the questions page
- GET /questions/id to load questions, POST questions/id to add questions
- /login - loads the optional login page
- /logout - loads the logout page and destroys the session

# Schema for MongoDB:
```Javascript
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
```
