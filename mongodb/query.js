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

// 指定返回的字段 1 表示 返回 0 不返回
// 如果不指定字段默认不返回
// _id如果不指定也会返回，如果不想让他返回需要显示指定为0
PersonModel.find({}, {name: 1, age: 1, _id: 0}, (err, docs) => {

    console.log(docs);
});


// 当找到第一条匹配的记录时就立刻返回，不在继续查找了，返回单个对象
PersonModel.findOne({}, {name: 1, age: 1, _id: 0}, (err, doc) => {

    console.log(doc);
});

// 按照ID进行查询
PersonModel.findById('ID', {name: 1, age: 1, _id: 0}, (err, doc) => {

    console.log(doc);
});