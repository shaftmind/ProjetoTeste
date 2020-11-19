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