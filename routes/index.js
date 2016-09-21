var express = require('express');
var router = express.Router();
var soap = require('soap');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var url = 'http://www.webservicex.net/geoipservice.asmx?WSDL';
  var args = {};
  var response = "";
  soap.createClient(url, function(err, client) {
      client.GetGeoIPContext(args, function(err, result) {
        // response  = result;
        res_obj = JSON.stringify(result)
        console.log('type',typeof(res_obj));
        console.log(res_obj);
        res.render('index', { title: res_obj });
      });
  });
  // console.log("r",response)
  // res.render('index', { title: response });
});

module.exports = router;
