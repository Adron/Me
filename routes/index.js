var GitHubApi = require("github");

exports.index = function(req, res){
    res.render('index', { title: 'Vcard @adron' });
};
