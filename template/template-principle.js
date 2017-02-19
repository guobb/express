const express = require('express');

let app = express();

/**
 * 1. 动态内容 当前时间
 * 2. 静态内容 tmpl.html
 * 3. 动静结合
 *
 */
app.get('/', (req, res) => {

});

/**
 * 渲染模版
 * @param tmpl
 * @param data
 */
function render(tmpl, data) {
    // 用真实的值替换占位变量
    return tmpl.replace(/\{\{(\w+)\}\}/, (input, group1) => {
        return data[group1];
    })
}

// 把模版里的变量替换成对象里的属性，变量和属性名一定要相同
let result = render('<h1>{{title}}</h1>', {title: 'node'});

console.log(result);