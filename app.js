const express = require('express')
const bodyParser = require('body-parser')
const { readEmp } = require('./databse/dao')

const app = express()
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.use(bodyParser.json())

app.get('/employee/pdf', readEmp)
app.get('/employee/csv', readEmp)
app.get('/employee/download', (req, res) => res.download('./output.pdf'))


app.listen(8080, function () {
    console.log("server start at 8080");
})


