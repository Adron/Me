exports.index = function(req, res){
  res.redirect('/index.html');
};

exports.meetups = function(req, res){
	res.render('meetups', { title: 'Meetups' });
};

exports.home2 = function(req, res){
	res.render('index', { title: 'Vcard @Adron' });
};