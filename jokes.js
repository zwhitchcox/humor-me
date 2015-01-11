var http = require("http")
var fetch = http.request({
  host: "http://www.reddit.com/r/jokes/.json?limit=100?jsonp",
  port: 80,
  path: "/",
  method: "GET",
  withCredentials: false // this is the important part
}, function(res) {
    var result = ""
    res.on('data', function(chunk) {
        result += chunk;
				console.log(chunk)
    });
    res.on('end', function() {
        console.log("response.................");
        console.log(result);
    });
});
/*
var opts = {
	host:
}
var req = http.get("http://www.reddit.com/r/jokes/.json?limit=100"
	, function(res) {
	res.on('data', function (buf) {

		var jokes = "";
		var jokesAudio = "";
		[].forEach.call(JSON.parse(buf).data.children,function(d,i){
			jokes += d.data.title+"<br>"+d.data.selftext+"<br><br>"
			jokesAudio += d.data.title+" "+d.data.selftext+" "
		})
		var jokesel = document.createElement("div")
		jokesel.innerHTML = jokes
		document.body.appendChild(jokesel)
	})
})
*/
