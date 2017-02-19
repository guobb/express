/**
 * Created by apple on 17/2/19.
 */
const express = require('express');
const path = require('path');
const fs = require('fs');
let app = express();

/**
 * 静态服务中间件
 *
 */
// 1
app.use((req, res, next) => {
   fs.createReadStream(__dirname+'/public'+req.url).pipe(res);
});

// 2
//app.use(express.static(__dirname + '/public'));
// 3
//app.use(express.static(path.resolve('public')));

app.listen(8080);