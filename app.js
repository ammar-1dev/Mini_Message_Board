const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");
const CustomStartError = require("./errors/CustomStartError");

app.use("/", indexRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw new CustomStartError("Start up error");
    }
    console.log(`Mini message board starts in port ${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});