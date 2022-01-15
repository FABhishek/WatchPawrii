const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const {v4: uuidv4} = require('uuid')

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = normalizePort(process.env.PORT || 4000);

const room = {};
const bot = 'Felix da Bot'
app.use(express.urlencoded({extended : true}));

app.get('/',(req,res) => { res.sendFile(path.resolve(__dirname,'src/App.js'))
});

app.post('/room', (req,res) => {
    const room = createNewRoom();
    console.log
    res.redirect(`/${room}`)
})


server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
});

// var express = require('express');
// var app = express();
// var path = require('path');
// var PORT = 3000;
 
// // Without middleware
// app.get('/', function(req, res){
//     var options = {
//         root: path.join(__dirname)
//     };
     
//     var fileName = 'Hello.txt';
//     res.sendFile(fileName, options, function (err) {
//         if (err) {
//             next(err);
//         } else {
//             console.log('Sent:', fileName);
//         }
//     });
// });
 
// app.listen(PORT, function(err){
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// })