const express = require('express');
const path = require('path');

let app = express();

// 配置模版引擎
app.set('view engine', 'ejs');
// 指定模版存放的路径
// resolve 先获取当前的所在绝对目录，然后再拼上后面的参数
app.set('views',path.resolve('views'));

app.get('/', (req, res) => {
    res.render('index', {title: '首页'});
});

app.get('/reg', (req, res) => {
    res.render('index', {title: '注册'});
});

//console.log(process.cwd())

app.listen(8080);

