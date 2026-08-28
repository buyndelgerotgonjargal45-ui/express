const express = require('express');
const mongoose=require('mongoose');
const User=require('./models/user.schema')
const classModel= require('./models/classModel.schema')
const {compare, hash} = require('bcrypt')

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
    const hashedPassword =await hash(req.body.password, 10) 
    const response= await User.create({
        username: body.username,
        email:body.email,
        password: hashedPassword,
        age:body.age,
        classId: body.classId

    })
    res.status(200).json(200)
})

app.post('/login', async(req, res)=>{
    const body=req.body
   const user = await User.findOne({
      username: body.username,
    })

   
    const isValid  =await compare(body.password, user.password); 
    if(isValid) {
      res.json({ message: "amjilttai newterlee" }).status(200)
    } else {
      res.json({ message: "nuuts ug buruu bn" })
    }


    res.status(200).json(200)
})


app.get('/user',  async (req, res) => {
   const users = await User.find({}).populate('classId', 'name');
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