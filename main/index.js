const baseUrl = 'http://localhost:8080/employee'
async function requestMethod(url) {
    try {
        let response = await fetch(baseUrl + url, {
            method: 'GET',
            headers: {
                "content-type": 'application/json'
            }
        })
        response = await response.text()
        if (url === '/csv') {
            download('data:text/CSV,' + response, 'employee.csv');
        }
        if (url === '/pdf') {
            if (response === 'done') {
                requestMethod('/download')
                window.location.href = baseUrl + '/download';
            }
        }
    }
    catch (err) {
        alert(err)
    }
}


function download(dataurl, filename) {
    var a = document.createElement("a");
    a.href = dataurl;
    a.setAttribute("download", filename);
    a.click();
}