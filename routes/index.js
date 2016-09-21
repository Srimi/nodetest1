var express = require('express');
var router = express.Router();
var soap = require('soap');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var url = 'http://www.webservicex.net/country.asmx?WSDL';
  var args = {};
  var response = "";
  soap.createClient(url, function(err, client) {
      client.GetCountries(args, function(err, result) {
      	response  = String(result);
      	console.log('type',typeof(response));
        console.log(response);
        res.render('index', { title: result });
      });
  });
  console.log("r",response)
  // res.render('index', { title: response });
});

module.exports = router;
