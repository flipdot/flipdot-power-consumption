function switchProfile(profile) {
  hackerDS.display.send('switchView', profile)
}

hackerDS.server.send('getSettings');
hackerDS.on('onSettings', function(urls){
  window.urls = urls;
  delete window.urls.default;
  loadProfiles(Object.keys(window.urls));
})

function createProfile(profile) {
  var buttonsDiv = document.getElementById('buttons');
  var btn = document.createElement('button')
  var div = document.createElement('div')

  div.style.float = 'left'

  var label = document.createTextNode('switch to '+profile.toLocaleUpperCase())

  btn.onclick = function() {
    switchProfile(profile)
  }

  btn.appendChild(label)
  div.appendChild(btn)
  buttonsDiv.appendChild(div)
}

function loadProfiles(profiles){
  for(i in profiles) {
    var profile = profiles[i]
    createProfile(profile)
  }
}
