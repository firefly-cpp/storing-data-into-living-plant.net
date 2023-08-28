var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');
var fs = require('fs');
var path = require('path');

//  Server static files
var serve = serveStatic('.', {
    'index': ['index.html', 'index.htm'],
    setHeaders: (res, filePath, stat) => {
        if (filePath.endsWith('.ico')) {
            res.setHeader('Content-Type', 'image/x-icon');
        }
    }
});

//  Create server
var server = http.createServer(function onRequest(req, res) {
    //  Redirect to index.html
    if (req.url === '/') {
        req.url = '/views/index.html';
    }

    //  Redirect to HTML file
    if (!req.url.includes('.')) {
        let url = `/views/${req.url}.html`;
        if (fs.existsSync(path.join(__dirname, url))) {
            req.url = url;
        } else {
            //  Redirect to /404
            res.writeHead(302, { 'Location': '/404' });
            res.end();
        }
    }

    serve(req, res, finalhandler(req, res));
});

server.listen(3000);