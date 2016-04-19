var File = function() {
  var self = this;
  var content = 'ciao';

  this.read = function() {
    self.on('rx', function(data) {
      console.log(content + data);
    });
    return content;
  };

  this.write = function(data) {
    content = data;
    self.on('second', function() {
      return content;
    });
  };
};

var Network = function() {
  var self = this;

  this.send = function(data) {
    // send data somewhere, somehow
  };

  this.receive = function(data) {
    self.emit('rx', data);
  };
};

MicroEvent2.mixin(File);
var file = new File();

MicroEvent2.mixin(Network);
var network = new Network();

network.on('rx', function(data) {
  console.log('rx >> ' + data)
  var el = document.createElement('div')
  el.innerHTML = '<pre> RX: ' + data + '</pre>'
  document.body.appendChild(el)
});

//
setInterval(function() {
  var newData = 'fake-data';
  network.receive(newData);
}, 3000);
