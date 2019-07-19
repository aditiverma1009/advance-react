import express from 'express';
// import config from './config';

const app = express();

app.use(express.static('dist'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html') // we can use html instead of ejs

app.get('/',(req,res)=>{
    res.render('index.html', {answer: 5})
})

app.listen(process.env.PORT || 8000, function listenHandler(){
    console.info(`Running on ${process.env.PORT || 8000}`)
})