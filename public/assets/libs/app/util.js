var app = app || {};

// -- UTIL -- //
app.util = app.util || {};

app.util.filterArrayObjBy = function(obj, filter, by) {
    return obj.filter(function(e) {
        return e[by] === filter;
    });
};

//-- ADAPTERS -- //
app.adapter = app.adapter || {};

app.adapter.get = function(adapter) {
    var baseUrl = app.properties.server.baseUrl;

    if (!baseUrl) {
        app.log.error("App properties server baseUrl não definido");
        return null;
    }

    var $http = app.adapter.http;

    if ($http) {
        var adaps = app.adapter.adapters;
        if (adaps) {
            var a = adaps[adapter];
            if (a) {
                app.log.info("Executando o adapter: {}", adapter);
                return $http({
                    url: app.properties.server.baseUrl + a.url,
                    method: a.method,
                    params: a.parametros
                });
            } else {
                app.log.error("Adapter {}: não encontrado em adapters.js", adapter);
                return null;
            }
        } else {
            app.log.error("App adapters não definido");
            return null;
        }

    } else {
        app.log.error("HTTP Controller não definido");
        return null;
    }
};

//-- LOGS -- //
app.log = app.log || {};

app.log.formatText = function(text, args) {
    var newText = text;
    for (var i = 1; i < args.length; i++) {
        newText = newText.replace(new RegExp('\\{}'), args[i]);
    }
    return newText;
};

app.log.error = function(text) {
    var txtError = app.log.formatText(text, arguments);
    console.error(txtError);
};

app.log.info = function(text) {
    var txtInfo = app.log.formatText(text, arguments);
    console.info(txtInfo);
};