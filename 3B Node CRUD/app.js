const express = require("express")
const mongoose = require("mongoose")

var url = "mongodb://127.0.0.1:27017"

const app = express()

mongoose.connect(url)

const con = mongoose.connection

con.on("open", ()=>{
    console.log("Connected to Database")
})

app.use(express.json())

const employeeRouter = require("./routes/employees")

app.use("/employees",employeeRouter)

app.get("/" , (req,res)=>{
    res.send("hello");
})

app.listen(4000,()=>{
    console.log("Server started")
})

/*

http://localhost:4000/employees/delete/663cb23de09db465dc062b18
http://localhost:4000/employees/update/663cb29730d2eb7a2ae30a3b
http://localhost:4000/employees/
http://localhost:4000/employees/

{
  "name" : "Vinit",
  "designation" : "Gentle men"
}

*/