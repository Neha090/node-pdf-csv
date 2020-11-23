var db = require('./connection')
var csv = require('../csv/index')
var pdf = require('../pdf/createPdf')
var fs = require('fs')
var path = require('path')

var readEmp = function (req, res) {
    db.execute(`select * from employee order by empId asc`, function (err) {
        if (err) {
            console.log(err.message);
            return;
        }
    }, async function (err, result) {
        if (err) {
            console.log(err.messmage);
            return;
        }
        var option = req.url.split('/')
        if (option[2] === 'pdf') {
             await pdf.generatePdf(result.rows)
             res.write('done')
        
        }
        if (option[2] === 'csv') {
            var str = csv.generateCsv(result.rows)
            res.write(str);
        }
        res.end();
    })
}

module.exports = { readEmp }