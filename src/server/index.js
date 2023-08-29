//    1. Add this code to the very top of your `server/index.js` file:

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const express = require("express");
const app = express();

const fetch = require("node-fetch");

var https = require("follow-redirects").https;
var fs = require("fs");

var path = require("path");
const mockAPIResponse = require("./mockAPI.js");

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// 1-  Update app.use(express.static('src/client')) to app.use(express.static('dist')).
app.use(express.static("dist"));

// console.log(__dirname);

//  https://api.meaningcloud.com/sentiment-2.1?key=bde9f61e3d4ed6486194beb0574879f8&url=google.com&lang=en

app.post("/PostData", function (req, res) {
  const { Text } = req.body;

  console.log(
    "Now is in  ->  ''' app.post('/PostData', function  ( req, res )  ''' <-  Method "
  );

  console.log("post('/PostData' ==== >>>>  )" + Text);

  fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${Text}&lang=en`
  )
    .then((data) => data.json())
    .then((json) => res.send(json))
    .catch((err) => res.send(err));
});

app.get("/", function (req, res) {
  //  1- Update your server file. Change the home route to use the index file from dist:

  // res.sendFile('dist/index.html')

  // res.sendFile(__dirname + "/dist/index.html")

  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

//  Step 4: Environment Variables   ====>  Next, in server/index.js, you need to declare your API credentials,

// You could call it aylienapi, or anything else

// console.log(`Your API key is ${process.env.API_KEY}`);

// var textapi = new aylien({
//     application_key: `${process.env.API_KEY}`
//   });
