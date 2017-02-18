const express = require('express');

let app = express();

/**
 * 计算一个处理请求共花了多少时间
 */

// 使用中间件
app.use((req, res, next) => {

    res.start = Date.now();

    // 暂存原来的end方法
    let end = res.end;

    // 为原来的end赋值自定义的函数

    res.end = ()=> {
        // 先把原来的函数调用一次
        end.apply(res, [].slice.call(arguments));
        // 计算结果
        console.log(Date.now() - res.start);
    };


    res.mny = 100;
    next();
});

app.use((req, res, next) => {
   res.mny = res.mny - 10;
   next();
});


app.get('/money', (req, res) => {

    res.send('money' + res.mny)
});


app.listen(8080);