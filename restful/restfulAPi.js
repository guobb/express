const express = require('express');

let app = express();

// 存放所有的用户
let users = [
    {
        id: 1,
        name: 'node'
    },
    {
        id: 2,
        name: 'express'
    }
];


// 1 获取所有的用户

app.get('/users', (req, res) => {
    //Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
    let accept = req.headers['assept'];

    let acceptType = accept.split(',').map((item) => {
        let values = item.split(';');

        return {
            type: values[0], // 需要的文件的类型
            q: values[1] ? values[1].split('=')[1] : 1 // 权重 默认是1
        }

    }).sort((a, b) => {
        return b.q - a.q;
    })[0];
    res.send(users);
});


app.listen(8080);