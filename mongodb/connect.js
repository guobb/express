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

// 根据模型创建实体,指的个体对象

let personEntity = new PersonModel({
    name: 'node',
    age: 6,
    email: '123567@qq.com'
});

// 用save 方法把自己保存到数据库中
/**
 *
 */
personEntity.save((error, doc) => {

    if (error) {
        console.log("error:" + error);
    } else {
        console.log(doc)
    }
});
