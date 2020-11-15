const unirest = require("../node/node_modules/unirest");

const req = unirest("GET", "https://trailapi-trailapi.p.rapidapi.com/trails/explore/");
// get parameters
req.query({
	"lat": "50.87178",
	"lon": "4.17589"
});
// http headers via post
req.headers({
	"x-rapidapi-key": "975c8532a9mshcd6ab77955b9e1fp135539jsn4b238e21e8f6",
	"x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
	"useQueryString": true
});

// request gedaan callback meegeven, response terugkrijgen
req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});