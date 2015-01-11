var http = require('http-browserify')
var tts = require('./tts')
var req = http.get({
  hostname: "www.reddit.com/r/jokes/.json?limit=100",
  path: "/",
  method: "GET",
  withCredentials: false,
  protocol:"http:"
}
  , function(res) {
  res.on('data', function (buf) {

    var jokes = jokeEls= [];
    [].forEach.call(JSON.parse(buf).data.children,function(d,i){
      jokes[i] = d.data.title+" "+d.data.self_text
      jokeEls[i] = document.createElement("div")
      jokeEls[i].innerHTML = d.data.title+' '+d.data.selftext
      document.body.appendChild(jokeEls[i])
    })
    function sayjoke(idx) {
      var that = this
      that.tts = tts
      utterance = that.tts(jokes[idx].innerHTML,sayjoke.bind(that,'hello'))
    }
    sayjoke(0)
  })
})
