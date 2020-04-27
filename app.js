const express = require("express");
const app = express();

app.get("/", function(request, response) {
    response.send("жопа")
});

app.listen(3000);

