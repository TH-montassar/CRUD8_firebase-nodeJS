const express = require('express')
const cors = require('cors')
const User = require('./config')
const app = express()
app.use(express.json())
app.use(cors())



app.post('/create', async (req, res) => {
  const data = req.body
  // console.log("okay monta",data);
  await User.add({ data })
  res.send({ msg: 'User Added' })
})



app.get('/', async (req, res) => {
  const snapshot = await User.get()
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  res.send(list)
})

//get blech id
app.get('/gettest', async (req, res) => {
  const snapshot = await User.get()
  const list = snapshot.docs.map((doc) => doc.data())
  res.send(list)
})

//get blech id ((id fel consolle))
app.get('/gettest', async (req, res) => {
  const snapshot = await User.get()
  const ids = snapshot.docs.map((doc) => doc.id)
  console.log(ids)
  const list = snapshot.docs.map((doc) => doc.data())
  res.send(list)
})

app.get('/getone/:id', async (req, res) => {
  const id = req.params.id
  const snapshot = await (await User.doc(id).get()).data()
  res.send(snapshot)
})

app.put('/update/:id', async (req, res) => {
  const id = req.params.id;
 // console.log('befor deleting ID', req.body)
  delete req.body.id
 // console.log('after  deleting ID', req.body)
  const data = req.body
  await User.doc(id).update(data)
  res.send({ msg: 'Updated' })
})

app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  await User.doc(id).delete()
  res.send({ msg: 'Deleted' })
})






/**ici seront faits les service web */

app.listen(3000, (err) => {
  if (err) {
    console.log('error while running server')
  } else {
    console.log('Server is runnig on prot 3000')
  }
})
