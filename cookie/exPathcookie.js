/**
 * Created by apple on 17/2/19.
 */
const express = require('express');

const cookieParser = require('cookie-parser');

let app = express();

app.use(cookieParser());

// req.headers.cookie = name = node; age = 6;
app.get('/write', (req, res) => {

    // 默认设置
    res.cookie('name', 'node');

    // 设置域名 只要再次访问指定域名的时候客户端才会向服务器发送cookie
    res.cookie('name', 'node', {
        domain: 'a.node.cn'
    });

    res.send('ok');
});

app.get('/read', (req, res) => {

    console.log(req.cookies);

    res.end('good');
});


app.listen(8080);