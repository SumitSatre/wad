var express = require("express")
const fs = require("fs");
var app = express()

let PORT =3000


app.get("/", (req,res)=> {
    // res.send("This is sample program")
    // const htmlContent = fs.readFileSync("a.html", "utf8");
    // res.send(htmlContent);
    fs.readFile("a.html", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            res.status(500).send("Internal Server Error");
            return;
        }
        // Send the content of a.html as the response
        res.send(data);
   
})
})

app.listen(PORT,()=>{
    console.log(`server is running on port on ${PORT}`)
})