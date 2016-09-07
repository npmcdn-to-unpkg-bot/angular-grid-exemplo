app.properties = app.properties || {};

var port = "8080";
var uri = window.location.protocol + "//" + window.location.hostname + ":" + port;

app.properties.server = {
    baseUrl: uri
};