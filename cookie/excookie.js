/**
 * Created by apple on 17/2/19.
 */
const express = require('express');

const cookieParser = require('cookie-parser');

let app = express();

app.use(cookieParser());

// req.headers.cookie = name = node; age = 6;
app.get('/', (req, res) => {

    // 如果请求中的 cookie 存在 visited, 则输出 cookie
    // 否则，设置 cookie 字段 visited, 并设置过期时间为 10 分钟
    if(req.cookies.visited){
        res.send('欢迎用户登录');
    }else {
        res.cookie('visited', 1, {maxAge: 10*1000});
        res.send('欢迎新用户');

    }


});


app.listen(8080);