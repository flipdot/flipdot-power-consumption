function setUrl(url) {
  var frame = document.getElementById('frame')
  frame.setAttribute('src', url);
}

window.urls = null;

hackerDS.server.send('getSettings');
hackerDS.on('onSettings', function(urls){
  window.urls = urls;
  setUrl(window.urls.default);
})

hackerDS.on("switchView", function (profile) {
  var url = urls[profile]
  setUrl(url)
})
