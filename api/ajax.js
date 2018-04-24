let ajax = function (method, url, onload, param) {
    let xhr = new XMLHttpRequest();
    let baseUrl='http://www.nightdays.net/yoga/';
    xhr.open(method, baseUrl+url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function (res) {
        let resultObject = JSON.parse(res.currentTarget.responseText);
        onload(resultObject);
    }
    param=JSON.stringify(param);
    xhr.send(param);
}