const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
//botando o servidor no ar todas varieveis em forma de constante

const app = express();
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-p5yum.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

