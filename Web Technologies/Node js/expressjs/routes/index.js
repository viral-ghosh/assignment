var express = require('express');
var router = express.Router();
var dbConn = require('../Database/connect');

// Retrieve all users 
router.get('/users', function (req, res) {
  dbConn.query('SELECT * FROM users', function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'users list.' });
  });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Add a new user  
router.post('/user', function (req, res) {
  let user = req.body;
 dbConn.query("INSERT INTO users SET ?",[user], function (error, results, fields) {
if (error) throw error;
  return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
  });
});


// Retrieve user with id 
router.get('/user/:id', function (req, res) {
  let user_id = req.params.id;
  if (!user_id) {
   return res.status(400).send({ error: true, message: 'Please provide user_id' });
  }
  dbConn.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {
   if (error) throw error;
    return res.send({ error: false, data: results[0], message: 'users list.' });
  });
});

//  Update user with id
router.put('/user', function (req, res) {
  let user_id = req.body.id;
  let name = req.body.name;
  let email =req.body.email;
  dbConn.query("UPDATE users SET name = ?,email=? WHERE id = ?", [name,email, user_id], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
   });
  });

  //  Delete user
router.delete('/user', function (req, res) {
  let user_id = req.body.user_id;
  if (!user_id) {
      return res.status(400).send({ error: true, message: 'Please provide user_id' });
  }
  dbConn.query('DELETE FROM users WHERE id = ?', [user_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
  });
  }); 
 
module.exports = router;
