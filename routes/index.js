var GitHubApi = require("github");

exports.github = function(req, res){
	var github = new GitHubApi({
	    // required
	    version: "3.0.0",
	    // optional
	    timeout: 5000,
	});

	var githubBits;
	var githubOrgName;

	github.authenticate({
	    type: "basic",
	    username: "adron",
	    password: "jumkpassword"
	});

	github.orgs.get({
	  org: "Basho"
	}, function(err, githubBits){
	  console.log(githubBits);
	  githubOrgName = githubBits;
	});


	res.render('github', { title: 'Github', githubbinBasho: githubOrgName });
};

exports.index = function(req, res){
    res.render('index', { title: 'Vcard @adron' });
};