const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var useragent = require('express-useragent');

app.use(useragent.express());
app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({ extended: true }));    

app.all('/', (req, res) => {
    var ip = req.socket.remoteAddress;
    console.log("Just got a request!",ip,"param:",req.params,"body:",req.body,"payload:",req.payload);
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)