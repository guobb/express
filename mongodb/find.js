/**
 * Created by apple on 17/2/19.
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

// 查询名字为node的用户
PersonModel.find({name: 'node'}, (error, doc) => {

    if (error) {
        console.log(err);
    } else {
        console.log(doc);
    }
});

// 向集合中插入10个文档
for (let i = 1; i < 10; i++) {
    /**
     *  向数据库中保存文档，
     */
    PersonModel.create({name: 'node' + i, age: i}, (error, doc) => {
        if (errr) {
            console.log(err);
        } else {
            console.log(doc);
        }
    });

    // 所有的异步方法都是在所有的同步方法执行完毕后才执行的
    console.log(i); // 1,2,3,4...10;
}
