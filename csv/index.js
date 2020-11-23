const { employeeData } = require("../databse/dao");
const fs = require('fs')
exports.generateCsv = function (employeeData) {

    var str = 'EmpId,Name,Salary\n';
    employeeData.map((el) => {
        el.map((ele) => {
            str += ele + ','
        })
        str=str.substring(0,str.length-1)
        str += '\n'
    })
    return str;
}



// for(var i=0;i<employeeData.length;i++)
    // {
    //     for(var j=0;j<employeeData[0].length;j++)
    //     {
    //         console.log(employeeData[j]+",")
    //     }
    //     console.log();
    // }
