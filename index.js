   const express = require("express");
   const app = express();

   app.get("/", (req, res) => {
      res.send("It Works...");
   });
   
   app.listen(5000, _ => console.log("Server listening on port 5000"));

   module.exports = app;