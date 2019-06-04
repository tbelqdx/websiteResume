//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})

app.post("/", function(req,res){
    var firstName = req.body.nom;
    var lastName = req.body.prenom;
    var email = req.body.email;

    var data = {
                email_address: email,
                status: "subscribed"
            };

    var jsonData = JSON.stringify(data);

    var options = {
        headers :{
            'Authorization': 'thomas c9e68ed1cad7a8547d65f290c32c4a9b-us20',
            'Content-Type': 'application/json',
            'Content-Length': jsonData.length
        },
        url: "https://us20.api.mailchimp.com/3.0/lists/c9b9a6e109/members/",
        method: "POST",
        data:jsonData
    };

    console.log(options);

    request(options, function(error, response, body){
        if(error)
        {
            console.log(error);
        }
        else{
            console.log(response);
        }
    })
})

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html")
})

//API Key c9e68ed1cad7a8547d65f290c32c4a9b-us20 todo change and anonimize api key

//list id c9b9a6e109