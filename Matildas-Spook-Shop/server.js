const express = require('express');
const app = express();
var path = require('path');
const session = require('express-session');

const homeRouter = require('./routes/home.routes');
const cartRouter = require('./routes/cart.routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//session middleware
app.use(session({
    secret: 'matildas-secret-potion', 
    resave: false,
    rolling: true,
    saveUninitialized: true,
    cookie: { maxAge: 10 * 60 * 1000 } // 10 minutes
}));

// Ucitavanje statičnih elemenata
app.use(express.static(path.join(__dirname, 'public')));

app.use('/home', homeRouter);
app.use('/cart', cartRouter);

app.listen(2000, '0.0.0.0');
