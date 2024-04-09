# More on Functions

Now we're going to learn about function return values, and function modifiers.

### Return Values

To return a value from a function, the declaration looks like this:

```swift
access(all) fun sayHello(): String {
  return "What's up dog";
}
```

In Cadence, the function declaration contains the type of the return value (in this case `String`).

### View Functions

The above function doesn't actually change state in Cadence — e.g. it doesn't change any values or write anything.

So in this case we could declare it as a `view` function, meaning it's only viewing the data but not modifying it:

```swift
access(all) view fun sayHello(): String {
  return "What's up dog";
}
```

## Put it to the test

We're going to want a helper function that generates a random DNA number from a string.

1. Create a private function called `generateRandomDna`. It will return a `UInt64`.

2. The function body should be empty at this point — we'll fill it in later.
