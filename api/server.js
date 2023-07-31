const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(logger);
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static("public"))

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(3000);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}
