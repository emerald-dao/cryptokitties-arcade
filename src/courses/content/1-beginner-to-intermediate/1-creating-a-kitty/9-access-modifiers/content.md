# Access Modifiers

So far we have been using `access(all)` on our variables and functions. This is an "access modifier" that means anyone (or any other contract) can call read that variable or call your contract's function and execute its code.

Obviously this isn't always desirable, and can make your contract vulnerable to attacks.

Let's look at how to declare a "private" function:

```swift
access(all) contract Example {
  access(all) let numbers: [UInt64]

  access(self) fun addToArray(number: UInt64) {
    self.numbers.append(number);
  }

  init() {
    self.numbers = []
  }
}
```

As you can see, we use the keyword `access(self)` to indicate a "private" function.

This means only other functions within our contract will be able to call this function and add to the numbers array.

Note that you can also declare functions inside of structs too. If a function in a struct has `access(self)` then only other functions in that struct can call it.

There are other, more complicated access modifiers that we will get to later.

# Put it to the test

Our contract's `createKitty` function is currently public — this means anyone could call it and create a new `Kitty` in our contract! Let's make it private.

1. Modify `createKitty` so it's a private function.
