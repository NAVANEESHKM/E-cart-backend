
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
require('dotenv').config();
const app = express();
const itemRouter = require('./posting');
const comment1=require('./posting2');
const comment2=require('./gettingall2');
const item4=require('./deleting');
const item5=require('./gettingall');
const user=require('./postuser');
const login=require("./loginfind")
const image=require("./imagepost")
const imageget=require("./imageget")
const cors = require('cors');


//mongodb+srv://user:pass@cluster0.mom8ir1.mongodb.net/
mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


  
  app.use(express.json());
  app.use(cors());
  app.use('/api',itemRouter);
  app.use('/api',item5);


  app.use('/api',item4);
  app.use('/api',comment1);
  app.use('/api',comment2);

  app.use('/api',user)
 app.use('/api',login)

 app.use('/api',image)
app.use('/api',imageget)
  


app.listen(3000, () => {
  console.log('Server started on port 3000');
});




 

  