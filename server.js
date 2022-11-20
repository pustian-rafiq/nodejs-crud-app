const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//Configure dotenv
dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8000;

//Log request
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyParser.urlencoded({extended: true}));

//set view engine
app.set('view engine','ejs')
// app.set("views", path.resolve(__dirname."views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/image',express.static(path.resolve(__dirname,"assets/image")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

app.get('/', (req,res) => {
    res.render('index');
});
app.get('/add-user', (req,res) => {
    res.render('add_user');
});


//Listen the server
app.listen(3000, ()=>{
    console.log(`Project is running on port ${PORT}`);
})