const express = require("express")
const app = express()
const https = require('https');

const operationsRouter = require("./routes/operations");
const functionsRouter = require("./routes/functions");
const datasRouter = require("./routes/datas");

app.use("/api", operationsRouter);
app.use("/api", functionsRouter);
app.use("/api", datasRouter);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`))

module.exports = app