# Math Operations

Math in Cadence is pretty straightforward. The following operations are the same as in most programming languages:

- Addition: x + y
- Subtraction: x - y,
- Multiplication: x \* y
- Division: x / y
- Modulus / remainder: x % y (for example, 13 % 5 is 3, because if you divide 5 into 13, 3 is the remainder)

Example:

```swift
access(all) contract Example {
    access(all) var myInteger: Int

    access(all) fun increment() {
        self.myInteger = self.myInteger + 1
    }

    access(all) fun decrement() {
        self.myInteger = self.myInteger - 1
    }

    init() {
        self.myInteger = 100
    }
}
```

Note that we use the `self` keyword to indicate a variable that exists 1 layer outside of our function's scope.

# Put it to the test

Every time we create a Kitty, we're going to want to keep track of the total # of Kitties created.

1. In your `createKitty` function, add 1 to the existing `totalKitties` variable.

Note: Right now our `totalKitties` variable is declared as `let`, which is a constant. You will have to change it to `var` which indicates the data is not a constant, and can be changed.
