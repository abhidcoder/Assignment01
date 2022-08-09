const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 8005;
const HandleData = require("./mongodb");
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
const cookieparser= require("cookie-parser");
app.use(cookieparser());



const path = require('path')

app.use(express.static(path.join(__dirname + "/public")))

app.all("/signup",async(req, res) => {
    const {one,two, three}=req.body.data
    try {
        const abcd = await HandleData.findOne({user_id:two});
        if(abcd!==null){
            res.send("4")
        }
        else{
        const handleData = new HandleData({
            name: one,
            user_id: two,
            password: three
        })
       await handleData.save();
        res.send("1")
    }
    } catch (error) {
        res.send("2");
    }
   });


app.all("/login",async(req, res) => {
    const {four,five}=req.body.data
    console.log(req.cookies.ByAbhishekKumarSingh)
    try{
    const abcd = await HandleData.findOne({user_id:four});
    if(abcd.user_id===four && abcd.password===five){
        res.send("1");
        }
    else{
        res.send("4")
    }
    } 
    catch (error) {
    res.send("2");
    }
   });



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
 

app.listen(port, () => {
console.log('listening to the port ${port)');
});
