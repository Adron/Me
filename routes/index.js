var GitHubApi = require("github");

exports.github = function(req, res){
	res.render('github', { title: 'Github' });
};

exports.index = function(req, res){
    res.render('index', { title: 'Vcard @adron' });
};