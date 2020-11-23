exports.convertToJSON = function (employeeData) {
    var employee = []
    for (var i = 0; i < employeeData.length; i++) {
        id = employeeData[i][0],
            name = employeeData[i][1],
            salary = employeeData[i][2],
            employee.push({ id, name, salary });
    }
    return employee;
}
