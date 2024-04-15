# Events

Our contract is almost finished! Now let's add an `event`.

Events are a way for your contract to communicate that something happened on the blockchain to your app front-end, which can be 'listening' for certain events and take action when they happen.

Example:

```swift
// declare the event
access(all) event IntegersAdded(x: UInt64, y: UInt64, result: UInt64);

access(all) fun add(x: UInt64, y: UInt64): UInt64 {
    let result: UInt64 = x + y
    // fire an event to let the app know the function was called:
    emit IntegersAdded(x: x, y: y, result: result)
    return result
}
```

Your app front-end could then listen for the event. A JavaScript implementation would look something like:

```javascript
YourContract.IntegersAdded(function (error, result) {
	// do something with result
});
```

## Put it to the test

We want an event to let our front-end know every time a new zombie was created, so the app can display it.

1. Declare an event called `NewKitty`. It should pass `kittyId` (a `UInt64`), `name` (a `String`), and `dna` (a `UInt64`).

2. Modify the `createRandomKitty` function to fire the `NewKitty` event after adding the new `Kitty` to our `kitties` array.

3. You're going to need the Kitty's id. For this scenario, we can use `totalKitties` as the `id`, since it will increment upon the creation of every new Kitty.

You should only be adding 1 line to declare the new event, and 1 line to emit it.
