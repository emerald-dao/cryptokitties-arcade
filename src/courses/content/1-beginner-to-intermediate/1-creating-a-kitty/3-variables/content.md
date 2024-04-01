# State Variables

Great job! Now that we've got a shell for our contract, let's learn about how Cadence deals with variables.

State variables are permanently stored in contract storage. This means they're written to the Flow blockchain. Think of them like writing to a database.

Example:

```swift
access(all) contract Example {
    access(all) let myInteger: Int

    init() {
        self.myInteger = 100
    }
}
```

In this example contract, we created an `Int` called `myInteger` and set it equal to 100.

### Unsigned Integers

While `Int` is meant for both negative and positive numbers, you can also use the more popular `UInt64`.

The `UInt64` data type is an unsigned 64 bit integer, meaning its value must be 0 through 18446744073709551615.

## Put it to the test

Our Kitty contract is going to want to track the total amount of Kitties created.

1. Declare a `UInt64` named `totalKitties`, and set it equal to 0 when the contract is deployed.
