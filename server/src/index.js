const express = require("express");
const cors = require("cors");

const app = express();
const msg = "Running !";
app.use(cors());

app.get("/api", (_, res) =>
    res.json({
        data: msg,
    })
);

app.listen(process.env.PORT || 3333, () => console.log(msg));



// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
