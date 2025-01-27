const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host:"127.0.0.1",
    port:3306,  //ha nem alapértelmezett, akkor itt kell megadni    
    password:"",
    database:"kozutak",
});

app.get("/",(req,res)=>{
    res.send("Fut a backend.");
});

app.get("/regiok", (req, res) => {
    const sql = "SELECT * FROM `regiok`";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
})
 
app.get("/8_id", (req, res) => {
    const sql = "SELECT * FROM  `regiok` where Rid = 8";
    db.query(sql, (err, result) =>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.listen(3001,()=>{
    console.log("server is running on port 3001");
});

app.get("/regiok_8",(reg,res)=>{
    const sql = "SELECT * FROM `regiok`";
    db.query(sql,(err,result)=>{
        if(err)return res.json(err);
        return res.json(result);
    })
})

app.get("/regiok_8",(reg,res)=>{
    const sql = "SELECT * FROM `regiok` where Rid=8";
    db.query(sql,(err,result)=>{
        if(err)return res.json(err);
        return res.json(result);
    })
})

app.post("/ujregiok",(req,res)=>{
    const sql = "INSERT INTO `regiok` (`Rid`,`regionev`,`regio_tipusa`)VALUES (?,?,?)";
    const values = [`11`,`Budapest`,`Főváros`];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Hiba történt:", err);
            return res.status(500).json({ error: "Adatbázis hiba történt" });
        }
        return res.status(200).json({ message: "A rekord(ok) Sikeresen be lettek szúrva", result });
    });
});


app.delete("/torles/:id", (req, res) => {
    const sql = "DELETE FROM `regiok` WHERE RID = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.json(res);
        return res.json(result);
    })
}
)