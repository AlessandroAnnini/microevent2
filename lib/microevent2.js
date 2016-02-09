/**
 * MicroEvent2
 */

function MicroEvent2() {}
MicroEvent2.prototype = {
  /**
   * Add a new listener for the event
   * @method on
   */
  on: function on(ev, func) {
    this._events = this._events || {};
    this._events[ev] = this._events[ev] || [];
    this._events[ev].push(func);
  },
  /**
   * Add a one-time listener for the event
   * @method once
   */
  once: function once(ev, func) {
    var self = this;
    function listener() {
      self.off(ev, listener);
      func.apply(self, arguments);
    }
    this.on(ev, listener);
  },
  /**
   * Remove listener for the event
   * @method off
   */
  off: function off(ev, func) {
    this._events = this._events || {};
    if (ev in this._events === false) return;
    this._events[ev].splice(this._events[ev].indexOf(func), 1);
  },
  /**
   * Fire event, each listener will be executed
   * @method emit
   */
  emit: function emit(ev /* , args... */) {
    this._events = this._events || {};
    if (ev in this._events === false) return;
    for (var i = 0; i < this._events[ev].length; i++) {
      this._events[ev][i].apply(this, Array.prototype.slice.call(arguments, 1));
    }
  },
  /**
   * Pushing events downstream from one handler to another
   * @method pipe
   */
  pipe: function pipe(a) {
    if (!a.emit) {
      throw new TypeError('non-EventEmitter provided');
    }
    var emit = this._emit = this.emit;

    this.emit = function () {
      emit.apply(this, arguments);
      a.emit.apply(a, arguments);
      return this;
    };
  },
  /**
   * @method unpipe
   */
  unpipe: function unpipe(a) {
    if (!this._emit) {
      throw new Error('Un-piped EventEmitter used');
    }
    if (this._emit !== a.emit) {
      throw new Error('Wrong EventEmitter provided');
    }
    this.emit = this._emit;
  }
};

/**
 * @method mixin
 * @param {Object} the object which will support MicroEvent2
 */
MicroEvent2.mixin = function (destObject) {
  var props = ['on', 'once', 'off', 'emit', 'pipe', 'unpipe', 'bind', 'unbind', 'trigger'];
  for (var i = 0; i < props.length; i++) {
    if (typeof destObject === 'function') {
      destObject.prototype[props[i]] = MicroEvent2.prototype[props[i]];
    } else {
      destObject[props[i]] = MicroEvent2.prototype[props[i]];
    }
  }
  return destObject;
};

/**
 * Export in common js
 */
if (typeof module !== "undefined" && 'exports' in module) {
  module.exports = MicroEvent2;
}

/**
 * Compatibility with micoevent.js
 */
MicroEvent2.prototype.bind = MicroEvent2.prototype.on;
MicroEvent2.prototype.unbind = MicroEvent2.prototype.off;
MicroEvent2.prototype.trigger = MicroEvent2.prototype.emit;
