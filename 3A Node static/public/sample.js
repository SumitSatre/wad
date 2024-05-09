var express = require("express")
const fs = require("fs");  // file system
var app = express()

let PORT =3000;

app.get("/", (req,res)=> {

    fs.readFile("3A Node static/public/a.html", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            res.status(500).send("Internal Server Error");
            return;
        }
        // Send the content of a.html as the response
        res.send(data);
   
})
});

app.listen(PORT,()=>{
    console.log(`server is running on port on ${PORT}`)
});
