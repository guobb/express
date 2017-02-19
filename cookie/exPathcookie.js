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
    //res.cookie('name', 'node');

    // 设置域名 只要再次访问指定域名的时候客户端才会向服务器发送cookie
    /*  res.cookie('name', 'node', {
     domain: 'a.node.cn'
     });
     */

    // 指定路径 只有当下次客户端 向服务器发送请求时，如果path=/read1的时候，才会向服务器发送, 否则不发送
    /*res.cookie('name', 'node', {
     path: '/read1'
     });*/

    //指定有效时间
    res.cookie('name', 'node', {
        expires: new Date(Date.now() + 10 * 1000),
        maxAge: 10 * 1000
    });


    res.send('ok');
});

app.get('/read', (req, res) => {

    console.log(req.cookies);

    res.end('good');
});

app.get('/read1', (req, res) => {

    console.log(req.cookies);

    res.end('good');
});

app.listen(8080);