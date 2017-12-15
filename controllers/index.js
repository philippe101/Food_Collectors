const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function(req, res) {
  res.render('index', {})
});

router.get('/user/donator', function(req, res) {
  db.user.findAll({})
  .then(function(result) {
      res.render('donator', { user: result})
  })
  .catch(function(){
    res.json('error')
  })
});

router.get('/user/volunteer', function(req, res) {
  db.order.findAll({})
  .then(function(result) {
    res.render('volunteer', { orders: result })
  })
  .catch(function(){
    res.json('error')
  })
});

router.get('/api/login/:email', function(req, res) {
  db.user.findAll({
    where: {
      email: req.params.email
    }
  })
  .then(function(result) {
    res.json(result);
  })
  .catch(function(){
    res.json('error')
  })
});

router.post('/api/new', function(req, res) {
  db.user.create(req.body)
  .then(function(result) {
    res.redirect("/user/" + req.body.user_type);
  })
  .catch(function(){
    res.json('error')
  })
});

router.get('/table/:id', function(req, res) {
  db.user.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function(result) {
    res.json(result)
  })
  .catch(function(){
    res.json('error')
  })
});

router.post('/api/order', function(req, res) {
  db.order.create(req.body)
  .then(function(result) {
    res.redirect("/user/donator");
  })
  .catch(function(){
    res.json('error')
  })
});

router.put('/api/order/:id', function(req, res) {
  db.order.update({
    name: req.body.name,
    quantity: req.body.quantity,
    expiration: req.body.expiration
  },{
    where: {
      id: req.params.id
    }
  })
  .then(function(result) {
     res.redirect("/user/donator");
  })
  .catch(function(){
    res.json('error')
  })
});

router.delete('/api/order/:id', function(req, res) {
  db.order.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(result) {
     res.redirect("/user/donator");
  })
  .catch(function(){
    res.json('error')
  })
});

router.get('/api/orders/all', function(req, res) {
  db.order.findAll({})
  .then(function(results) {
    res.json(results);
  })
  .catch(function(){
    res.json('error')
  })
});

router.get('/api/orders/:userId', function(req, res) {
  res.json(`USER ${req.params.userId} ORDERS`)
});

module.exports = router;
