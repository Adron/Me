exports.index = function(req, res){
    res.render('index', { title: 'Vcard @adron' });
};

exports.github = function(req, res){
	res.render('github', { title: 'Github' });
};