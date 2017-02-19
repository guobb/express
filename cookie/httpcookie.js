const http = require('http');

http.createServer((req, res) => {

    if(req.url == '/write'){
        // 响应头，实体头 扩展自定义头
        res.setHeader('Set-Cookie','name=node');

        res.end('ok');
    }else if(req.url == '/read'){
        console.log(req.headers);
        res.end(req.headers.cookies);
    }

}).listen(8080);