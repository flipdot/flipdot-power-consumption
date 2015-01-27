var baseUrl = 'http://flipdot.wegenerd.de/#/dashboard/db'
var urls = {
  power: baseUrl +'/tv',
  home: baseUrl +'/home'
}

urls.default = urls.power

function setUrl(url) {
  var frame = document.getElementById('frame')
  frame.setAttribute('src', url);
}

setUrl(urls.default)

hackerDS.on("switchView", function (profile) {
  var url = urls[profile]
  setUrl(url)
})
