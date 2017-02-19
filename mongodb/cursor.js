/**
 * Created by apple on 17/2/20.
 */

// 加载模块
const mongoose = require('mongoose');

// 连接数据库 mongod 服务器端 mongo客户端
let db = mogoose.connect("mongodb://127.0.0.1:12345/node");

// 如果连接不成功会执行error回调
db.connection.on("error", (error) => {
    console.log('数据库连接失败' + error);
});

// 如果连接成功会执行open 回调
db.connection.on("open", () => {
    console.log('数据库连接成功');
});


// 定义一个 schema, 描述此集合里有那些字段,字段是什么类型的
// 只有schema 中有的属性才能被保存到数据库中
let PersonSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number, default: 0},
    time: {type: Date, default: Date.new},
    email: {type: String, default: ''}
});

// 创建model,可以用它操作数据库中的person集合，指的整体

let PersonModel = db.model("person", PersonSchema);

PersonModel.find({}, null, {limit: 2}, (error, docs) => {

    if (error) {
        console.log(error);

    } else {
        console.log(docs);
    }
});

// 分页查询，每页3条，查询第2页
// skip 跳过的条数 limit 限制返回的条数 sort排序 1升序 －1降序

PersonModel.find({}, null, {limit: 3, skip: 3, sort:{age:1}}, (err, docs) => {
    console.log(docs);
});