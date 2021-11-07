var express = require('express');
var app = express();
let sqlUtil = require("./src/sqlUtil");

//  主页输出 "Hello World"
app.get('/', function (req, res) {
    sqlUtil.addOption("测试").then(res => {
        if (res) {
            console.log('插入成功');
            return;
        }
        console.log('失败');
    })
})

/**
 * 请求参数
 * wxId
 * 标题
 * 选项列表
 */
app.get('/create', function (req, res) {

    let sql = 'INSERT INTO options(id,optionCode,content) VALUES(,?,?)';
    let addSqlParams = ['测试code', '测试内容'];
})

app.get('/lots', function (req, res) {
    res.send('用户列表页面');
})


app.get('/draw', function (req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})