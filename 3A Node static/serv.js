const express = require('express');
const abc = express();
const fs = require("fs");



const PORT = 8000

abc.use(express.static('public'));

abc.get('/',(req,res)=>{
    // res.sendFile('./nav.html', {root: __dirname})
    res.sendFile('./public/a.html', {root: __dirname}) ;
});

abc.listen(PORT, function(){

 console.log(`Server listening on port::${PORT}`);

});