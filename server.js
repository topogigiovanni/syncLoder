var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(3090, function() {
	console.log('Server running on 3090...');
});
