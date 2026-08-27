const express = require('express');
const mongoose=require('mongoose');
const User=require('./models/user.schema')
const classModel= require('.models/classModel.schema')

const connectDb = async() => {
    await mongoose.connect('mongodb+srv://buyndelgerotgonjargal45_db_user:Do4LyWBs1BbPNS4v@cluster1.i1pdn0u.mongodb.net/')

}
const app = express()
app.use(express.json())
const port = 8080
connectDb()
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/user/create', async(req, res)=>{
    const body=req.body
    // console.log(body, 'body shu')
    const response=await User.create({
        username: body.username,
        email:body.email,
        password:body.password,
        age:body.age

    })
    res.status(200).json(200)
})
app.get('/user',  async (req, res) => {
   const users = await User.find()
   res.json(users)
})
app.get('/user/:userId', async (req, res) => {
  const userId = req.params.userId
  try {const user = await User.findById(userId)
  res.json(user)
}catch (error) {
  res.json(error)
}
  
})
app.post('/class', async (req, res) => {
  const body = req.body
  try {
    const response = await classModel.create({
      name: body.name,
      teachers: body.teachers,
      classroom: body.classroom
  
    }) 
    res.json(response)
  } catch (error) {
    res.json(error)
    
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})