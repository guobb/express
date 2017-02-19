/**
 * Created by apple on 17/2/19.
 */
const express = require('express');

let app = express();

app.use(require('cookie-parser')());

// 放在服务端的客户明细表

let session = {};

app.get('/', (req,res)=>{

    // 取出 cookie中的sid
    let sid = req.cookies.sid;

    // 如果有值的话就表示访问过啦
    if(sid){
        // 从服务器的session对象中取出当前客户端在服务器对应的session
        let currentSession = session[sid];
        // 赋值
        currentSession.num = currentSession.num-10;
        res.end(''+currentSession.num);

    }else{
        // 生成新的sid
        let newSid = Date.now()+''+Math.random();
        session[newSid] = {num:100};
        // 写入客户端
        res.setHeader('Set-Cookie','sid='+newSid);
        res.send('新用户');
    }
});

app.listen(8080);
