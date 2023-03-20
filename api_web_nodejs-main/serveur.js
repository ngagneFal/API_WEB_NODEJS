const express = require('express')
const app = express()
const port = 3000
 
app.use(express.json())
app.get('/helloworld/:nom', (req, res) => {
  res.send('Hello World '+ req.params.nom)
})

app.post('/add-user',(req, res) =>{
    res.send(req.body)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})