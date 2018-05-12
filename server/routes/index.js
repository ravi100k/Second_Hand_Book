const path = require('path');
var express = require('express');
var mongoose = require('mongoose');

module.exports = function (app,db) {
  app.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
  });

  app.post('/booklist/search',(req, res) => {
    try {
      db.collection('bookList').find({}).toArray((err,result)=>{
        if (err) throw err;
        else {
            res.status(200).send(result)
          }
      });
    } catch (e) {
      console.log('connection not done');
    }
  });

  app.get('/booklist',(req,res,next) => {
    let list = ['abc','cde','efg','adf','lmn','pqr']
    res.status(200).send(list)
  });


};
