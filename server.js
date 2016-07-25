const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

io.on('connection', function (socket) {
  console.log('a user connected')
  socket.on('disconnect', function () {
    console.log('user disconnected')
  })
})

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg)
  })
})

server.listen(3000, () => {
  console.log('server lsitening on port 3000')
})
