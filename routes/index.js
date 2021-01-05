/*
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-12-24 16:54:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-03 19:26:51
 */
var express = require('express');
var router = express.Router();
var crypto = require('crypto'); //引入加密模块

var fs = require("fs")
var model = []
var set = ''
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

function checkPhone(phone) {
  if (!(/^1[0-9]{10}$/.test(phone))) {
    return false;
  } else {
    return true
  }
}
/* GET home page. */
router.get('/start', function (req, res, next) {
  var v = Number(req.query.model)
  if (!checkPhone(v)) {
    res.send('请输入正确手机号')
    return
  }
  // fs.readFile('./routes/model.txt', 'utf-8', function (err, data) {
  //   var v = data += `手机号：${req.query.model},时间:${new Date()}\n`
  //   fs.writeFile('./routes/model.txt', v, function (_err, _data) {
  //     console.log(_err)
  //   })
  // })
  if (model.indexOf(v) > -1) {
    model.splice(model.indexOf(v), 1)
  }
  model.push(v)
  install()
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/end', function (req, res, next) {
  var v = Number(req.query.model)
  if (!checkPhone(v)) {
    res.send('请输入正确手机号')
    return
  }
  if (model.indexOf(v) > -1) {
    model.splice(model.indexOf(v), 1)
  }
  support(v, "end")
  res.render('index', { title: 'Express' });
});

function install() {
  for (var i = 0; i < model.length; i++) {
    support(model[i], 'start')
  }
}

function support(sj, type) {
  const child_process = require('child_process');
  var workerProcess = child_process.spawn('node', ['support.js', JSON.stringify({ click: sj, type })]);
  workerProcess.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });

  // workerProcess.stderr.on('data', function (data) {
  //    console.log('stderr: ' + data);
  // });

  workerProcess.on('close', function (code) {
    setTimeout(v => {
      install()
    }, 30000)
  });
}

module.exports = router;
