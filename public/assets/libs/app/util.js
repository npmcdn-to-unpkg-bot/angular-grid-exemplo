var app = app || {};

app.util = app.util || {};
app.adapter = app.adapter || {};
app.log = app.log || {};

// -- UTIL -- //

app.util.filterArrayObjBy = function (obj, filter, by) {
  return obj.filter(function(e) { return e[by] == filter; });
};

//-- ADAPTERS -- //

app.adapter.get = function (adapter) {
	var $http = app.adapter.http;
	if($http) {
		var adaps = app.adapter.adapters;		
		if(adaps) {
			var a = adaps[adapter];
			if(a) {
				return $http({
					url: a.url,
					method: a.method,
					params: a.parametros
				});
			} else {
				app.log.error("Adapter não encontrado", null);
			}
		} else {
			app.log.error("App adapters não definido", null);
			return null;
		}		
	
	} else {
		app.log.error("HTTP Controller não definido", null);
		return null;
	}
};

//-- LOGS -- //

app.log.error = function (text, args) {
	// TODO
	console.log(text);
};