const express = require('express')
const fs = require('fs')
const http = require('http')
const https = require('https')
const proxy = require('http-proxy-middleware')

const { routes } = require('./proxyconfig.json')

// const httpsOptions = {
// 	key: fs.readFileSync('/etc/letsencrypt/live/app.schoepproject.com/privkey.pem', 'utf8'),
// 	cert: fs.readFileSync('/etc/letsencrypt/live/app.schoepproject.com/cert.pem', 'utf8'),
// 	ca: fs.readFileSync('/etc/letsencrypt/live/app.schoepproject.com/chain.pem', 'utf8')
//};

const HTTPPORT = 80;
const HTTPSPORT = 443;

const app = express();
const httpapp = express();
//const httpsServer = http.createServer(httpsOptions, app);
const httpServer = http.createServer(httpapp);

httpapp.use(function(request, response){
    var url = request.headers.url;
    if(url == undefined){
        url = "";
    }
    response.redirect("https://" + request.headers.host + url);
});

for (route of routes) {
    app.use(route.route,
        proxy({
            target: route.address,
            pathRewrite: (path, req) => {
                return path.split('/').slice(2).join('/');
            }
        })
    );
}

app.use(express.static('public'));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/home.html')
})

app.listen(HTTPPORT);
//httpapp.listen(HTTPPORT);