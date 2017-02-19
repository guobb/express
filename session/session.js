/**
 * Created by apple on 17/2/19.
 */

const express = require('express');

const session = require('express-session');

let app = express();


app.use(session({
    secret: 'node', // sectet的值建议使用随机字符串
    cookie: {maxAge: 60 * 1000 * 30}, // 过期时间毫秒
    resave: true, // 每次响应结束的时候，都重新保存session
    saveUninitialized: true // 保存未初始化都session
}));

app.get('/', (req, res) => {

    if (req.session.sign) {// 检查用户是否已经登录
        console.log(req.session); // 打印session值
        res.send('welecome' + req.session.name);

    } else {
        /**
         * session = {}
         * 第一次访问的时候，会生成一个sid, Data.now + Math.random();
         * sessions.sid = {}
         * 把这个sid发送到浏览器端
         * @type {boolean}
         *
         * 因为session是借用cookie实现的，所以当设置session的时候，会自动设置cookie
         */
        req.session.sign = true;
        req.session.name = "nodejs";
        res.send('欢迎登录');
    }
});

app.listen(8080);