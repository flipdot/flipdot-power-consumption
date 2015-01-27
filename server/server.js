module.exports = function Server(hackerDS) {
  var mySelf = this;
  
  mySelf.init = function(){
    console.log("init hello world module");
    
    var i = 1;
    setInterval(function() {
      hackerDS.display.send("demoToDisplayMessage", "hello from the server! "+i);
      i++;
    }, 1000);
  };
  
  hackerDS.on("serverMsg", function (msg) {
    console.log(msg);
  });
};