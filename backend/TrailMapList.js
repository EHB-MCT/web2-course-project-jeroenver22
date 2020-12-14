var unirest = require("unirest");

var req = unirest("GET", "https://trailapi-trailapi.p.rapidapi.com/trails/`${id}`/maps/");

req.headers({
	"x-rapidapi-key": "975c8532a9mshcd6ab77955b9e1fp135539jsn4b238e21e8f6",
	"x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});