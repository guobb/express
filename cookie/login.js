/**
 * Created by apple on 17/2/19.
 */
const express = require('express');

const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve());
app.use(cookieParser());

function checkLogin(req, res, next) {

    if (req.cookies && req.cookies.usename) {
        next();
    } else {
        res.redirect('/');
    }
}
// 进入登录页
app.get('/', (req, res) => {
    res.render('login', {});
});

// 登录
app.get('/login', (req, res) => {
    let username = req.query.username;

    res.cookie('username', username);
    // 重定向，让客户端重定向新请求参数指定的路径
    res.redirect('/user');

});

// 用户主页
app.get('/user',checkLogin, (req, res) => {
    res.send(req.cookies.username);
});

app.listen(8080);