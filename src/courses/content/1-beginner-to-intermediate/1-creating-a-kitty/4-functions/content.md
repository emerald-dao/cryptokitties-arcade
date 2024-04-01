# Functions

A function declaration in Cadence looks like the following:

```swift
access(all) fun eatHamburgers(name: String, amount: UInt64) {

}
```

This is a function named `eatHamburgers` that takes 2 parameters: a `String` and a `UInt64`. For now the body of the function is empty. Note that we're specifying the access modifier as `access(all)`, which means anyone can call it.

You would call this function like so:

```swift
eatHamburgers(name: "vitalik", amount: 100)
```

## Put it to the test

In our app, we're going to need to be able to create some Kitties. Let's create a function for that.

1. Create a public function named `createKitty`. It should take two parameters: **name** (a `String`), and **dna** (a `UInt64`).

Leave the body empty for now — we'll fill it in later.
