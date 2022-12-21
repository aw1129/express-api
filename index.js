const express = require('express')
const app = express()
app.all('/', (req, res) => {
    var ip = req.socket.remoteAddress;
    console.log("Just got a request!",ip,"param:",req.params);
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)