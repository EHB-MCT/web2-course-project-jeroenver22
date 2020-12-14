const unirest = require("unirest");

var req = unirest("GET", "https://trailapi-trailapi.p.rapidapi.com/");
// get parameters
req.query({
	"q-activities_activity_type_name_eq": "hiking"
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