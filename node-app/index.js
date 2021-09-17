const express = require('express');
const app = express();
const port = 3000;
const db = require('./models/init')
const router = require('./routes');
var cors = require('cors')

app.use(cors());

app.use(router);

db(function(err){
    if(!err){
        app.listen(port, () => console.log(`listening on port ${port}!`));
    }
})