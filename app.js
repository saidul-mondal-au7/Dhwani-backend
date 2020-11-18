const express = require('express');
const bcryptjs = require('bcryptjs')
require('./db/keys.js')
const userRouter = require('./routes/users')
const stateRouter = require('./routes/states')
const districtRouter = require('./routes/districts')

const app = express();
const port = process.env.PORT



app.use(express.json())
app.use(userRouter)
app.use(stateRouter)
app.use(districtRouter)

app.listen(port,()=>{
  console.log('Server is up on port '+ port)
})
