module.exports = function Server(hackerDS) {
  var mySelf = this;

  var baseUrl = 'http://flipdot.wegenerd.de/#/dashboard/db'
  var urls = {
    tv: baseUrl +'/tv',
    powerConsumption: baseUrl +'/powerConsumption',
    users: baseUrl +'/users'
  }

  urls.default = urls.tv

  mySelf.init = function(){
    console.log("init flipdot-power-consumption");
  };

  hackerDS.on("getSettings", function () {
    hackerDS.display.send('onSettings', urls)
    hackerDS.controller.send('onSettings', urls)
  });
};
