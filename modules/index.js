const express = require("express");
const app = express();
const path = require('path')
const PORT = 3000
app.use(express.static('./'))

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, ()=>{
    console.log('Your server is running at localhost:%s',PORT)
})