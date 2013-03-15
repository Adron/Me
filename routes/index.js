exports.index = function(req, res){
    res.render('index', { title: 'Vcard @adron' });
};

exports.meetups = function(req, res){
	res.render('meetups', { title: 'Meetups' });
};
