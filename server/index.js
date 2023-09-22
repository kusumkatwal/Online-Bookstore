const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const mysql = require('mysql')

const db = mysql.createPool({
    host:'127.0.0.1',
    user: "root",
    password: "",
    database: "bookstoredatabase",

});
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert" , (req,res) =>{

    const id =req.body.id;
    const title = req.body.title;
    const author = req.body.author;
    const price = req.body.price;
    const date = req.body.date;
    const details = req.body.details;
    const pages = req.body.pages;

   const sqlInsert = "INSERT INTO book_details (`id`,`title`,`author`,`price`,`date`,`details`,`pages`) VALUES (?,?)"
   db.query(sqlInsert, [id,title,author,price,date,details,pages] , (err,result) => {
    console.log(err);

   });
    
});

app.listen(3001, () =>{
    console.log("Running on port 3001");
});

