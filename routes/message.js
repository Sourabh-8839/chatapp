
const express = require('express');

const router = express.Router();

const fs =require('fs');

router.get('/',(req,res,next)=>{

    fs.readFile('message.txt','utf-8',(err,data)=>{

        if(err){
            console.log(err);
            data ="No Chats";
        }

        res.send(`${data}<form onSubmit="document.getElementById('username').value = localStorage.getItem('username')"
        action="/" method="POST"><input type="text" name="message" >
        <input type="hidden" name="username" id="username">
        <button type="submit">Send</button></form>`)
    });
   
});

router.post('/',(req,res,next)=>{

    // console.log(req.body);
    // console.log(req.body.message);
    
    fs.writeFile('message.txt',`${req.body.username} : ${req.body.message}`,{flag:'a'},(err)=>{
        if(err){
        console.log(err);
        }
        res.redirect('/');  
})
})

module.exports=router;