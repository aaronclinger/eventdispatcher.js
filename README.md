# EventDispatcher.js

A simple class-based JavaScript event dispatcher.

## Example Usage

```js
function onChange(name) {
	console.log(name);
}

const events = new EventDispatcher();

events.on('change', onChange);

events.emit('change', 'Amanda');
```

## Documentation

### on(*event, callback*)

Attaches an event handler function to the provided event. This method returns the instance of `EventDispatcher` to allow for method chaining.

* **event** `String` - The type of event.
* **callback** `Function` - The function to execute when the event is triggered.

### once(*event, callback*)

Attaches an event handler function to the provided event that is executed, at most, once per event type. Once the event has been triggered the event handler automatically removes itself. This method returns the instance of `EventDispatcher` to allow for method chaining.

* **event** `String` - The type of event.
* **callback** `Function` - The function to execute when the event is triggered.

### off(*event [, callback]*)

Removes event handlers. This method returns the instance of `EventDispatcher` to allow for method chaining.

* **event** `String` - The type of event.
* **[callback]** `Function` - The function to execute when the event is triggered. If `callback` is not passed, this method will remove all handlers for the provided `event`.

If neither `event` or `callback` are passed, this method will remove *all* event handlers.

### emit(*type [, ...args]*)

Dispatches an event to the event handlers. This method returns the instance of `EventDispatcher` to allow for method chaining.

* **type** `String` - The type of event.
* **[...args]** `Mixed` - Optional arguments to be passed to the callback function.

### destroy()

Removes any events to allow for prompt garbage collection.

## License

`EventDispatcher.js` can be used freely for any open source or commercial works and is released under a [MIT license](https://en.wikipedia.org/wiki/MIT_License).

## Author

[Aaron Clinger](https://aaronclinger.com)
