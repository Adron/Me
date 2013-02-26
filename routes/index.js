
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {title: 'Adron B. Hall => Vcard, Projects & more...'});
};