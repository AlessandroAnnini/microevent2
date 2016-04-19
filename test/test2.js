var Emitter = function() {
  MicroEvent2.mixin(this)

  this.work = function(data) {
    setTimeout(function() {
      this.emit('worked', data);
    }.bind(this), 1000)
  }
}

var emitter = new Emitter();
emitter.on('worked', function(data) {
  console.log('rx >> ' + data)
  var el = document.createElement('div')
  el.innerHTML = '<pre> RX: ' + data + '</pre>'
  document.body.appendChild(el)
})

function makeItWork() {
  emitter.work('if you see me we\'re good')
}
