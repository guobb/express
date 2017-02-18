/**
 * Created by apple on 17/2/18.
 */
/**
 * 1. 安装
 * 2. 使用
 *
 */
// 加载express

const express = require('express');

//获取文件对象

let app = express();

// 配置路由
// 当用户访问'／'的时候，会执行后面的回调函数
app.get('/', (req, res) => {

    // send 可以自动判断参数类型,自动转换响应信息
    // 并且自动设置Content-Type
    res.send('hello express');
});

app.get('/node', (req, res) => {

    res.send('node express');
});

// 启动服务器

app.listen(3000);
