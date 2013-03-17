var GitHubApi = require("github");

var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000,
});

github.authenticate({
    type: "basic",
    username: "adron",
    password: "junkPassword"
});

github.orgs.get({
	org: "Basho"
}, function(err, res){
	console.log(res);
});

// github.orgs.get({
// 	org: "IronFoundry"
// }, function(err, res){
// 	console.log(JSON.stringify(res));
// });

// github.orgs.get({
// 	org: "CloudFoundry"
// }, function(err, res){
// 	console.log(JSON.stringify(res));
// });


// github.user.getFollowingFromUser({
//     user: "adron"
// }, function(err, res) {
//     console.log(JSON.stringify(res));
// });

// github.repos.getAll({
// 	type: "public", sort: "updated", direction: "desc"
// }, function(err, res) {
// 	console.log(JSON.stringify(res));
// });