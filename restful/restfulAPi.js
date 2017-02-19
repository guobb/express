const express = require('express');
//const ejs = require('ejs');
const path = require('path');

const bodyParser = require('body-parser');

let app = express();

app.set('view engine', 'ejs');

app.set('views', path.resolve());

app.use(bodyParser.urlencoded({extended: true}));

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
// curl -v -H 'accept:text/html' http://localhost:8080/users
app.get('/users', (req, res) => {
    //Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
    let accept = req.headers['accept'];

    let acceptType = accept.split(',').map((item) => {
        let values = item.split(';');

        return {
            type: values[0], // 需要的文件的类型
            q: values[1] ? values[1].split('=')[1] : 1 // 权重 默认是1
        };
        // 优先级进行排序，取排名最高的
    }).sort((a, b) => {
        return b.q - a.q;
    })[0].type;

    if (acceptType == 'text/plain') {
        res.send(users);
    } else if (acceptType == 'text/html') {
        res.render('users.ejs', {
            users: users
        })
    } else {
        res.send(users);
    }

    res.send(users);
});

// 返回某个用户信息
// curl http://localhost:8080/users/1
app.get('/users/:id', (req, res) => {
    let id = req.params.id;

    let filterUsers = users.filter((user) => {
        return user.id == id;
    });

    res.send(filterUsers.length > 0 ? filterUsers[0] : '此用户不存在');

});

// 新增用户
// -X 指定请求的方法 --data 指定请求体的数据
// curl -X POST --data 'name=java' http://localhost:8080/users
app.post('/users', (req, res) => {
    let addedUser = req.body;

    if (addedUser) {

        // 为增加的用户赋一个最大的ID
        addedUser.id = users[users.length - 1].id + 1;
        users.push(addedUser);
        // 当新增加一个资源的时候要返回新生的资源完整对象
        res.send(addedUser);

    } else {
        res.send({mse:'添加失败'});
    }
});
app.listen(8080);