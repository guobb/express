/**
 * Created by apple on 17/2/18.
 */
const express = require('express');

// 获取配置对象

let app = express();

app.get('/', (req, res) => {
    console.log(req.host);
    console.log(req.path);
    console.log(req.query);
    console.log(req.params);
    res.send('欢迎来到首页')
});

/**
 *  路径参数，把向服务器传递的参数放在路径里
 */
app.get('/user/:id', (req, res) => {
    console.log(req.params.id);
    res.send('欢迎来到首页')
});



app.listen(8080);