microevent2.js
==============

*microevent2.js* is a event emitter library which provides the [observer pattern](http: //en.wikipedia.org/wiki/Observer_pattern) to javascript objects.

It works on node.js and browser.It is a single.js file containing

< a href = "https://raw.githubusercontent.com/sun2rise/microevent2/master/lib/microevent2.js" >

Usage
-----

You need a single file [microevent2.js](https://raw.githubusercontent.com/sun2rise/microevent2/master/lib/microevent2.js). Include it in a webpage via the usual script tag.

```html
<script src="microevent2.js"> </script>
```

```js
var microevent2 = new MicroEvent2();

microevent2.on('some-event', someCallback);
microevent2.emit('some-event');
```

or

```js
var Microevent2 = require('microevent2')
```

Instance Methods
----------------

### on(event, callback)

Subscribe to an event

-	`event` - the name of the event to subscribe to
-	`callback` - the function to call when event is emitted

### once(event, callback[, context])

Subscribe to an event only **once**

-	`event` - the name of the event to subscribe to
-	`callback` - the function to call when event is emitted

### off(event[, callback])

Unsubscribe from an event or all events.

-	`event` - the name of the event to unsubscribe from
-	`callback` - the function used when binding to the event

### emit(event[, arguments...])

Trigger a named event

-	`event` - the event name to emit
-	`arguments...` - any number of arguments to pass to the event subscribers

### pipe(eventEmitter)

Push events downstream from the handler to another

-	`eventEmitter` - the event emitter to pipe (to emit to)

### unpipe(eventEmitter)

Unpipe events to the previously piped event emitter

-	`eventEmitter` - the event emitter to unpipe

### mixin(destObject)

Mixin will delegate all microevent2 function in the destination object

-	`destObject` - the object which will support microevent2

### bind

For compatibility, see `on`

### unbind

For compatibility, see `off`

### trigger

For compatibility, see `emit`

Example
-------

see inside `test` folder
