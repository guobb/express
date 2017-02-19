/**
 * Created by apple on 17/2/19.
 */

const express = require('express');

const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname));
// 此中间件会把请体提取出来放到req.body上
// app.use(bodyParser());

// extened 为true时 用querystring,
// 为false会用bodyParser自己的转换
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.post('/reg', (req, res) => {
    console.log('reg');

    res.end('reg');
});

app.listen(8080);