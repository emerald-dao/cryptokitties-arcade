# Random

Cadence has a built-in randomness function called `revertibleRandom`, which is very unique compared to other smart contract languages and is a powerful feature of the language.

It also has an optional `modulo` parameter. If provided, the returned integer has the same type of modulo and is between `0` and `modulo - 1`. If not provided, the returned integer is between `0` and the maximum value of whatever you provide in between `<>` brackets.

Example:

```swift
let random: UInt64 = revertibleRandom<UInt64>()
log(random) // 6439901368804569341

let random: UInt64 = revertibleRandom(modulo: (5 as UInt64))
log(random) // 3
```

Learn more <a href="https://cadence-lang.org/docs/language/built-in-functions#revertiblerandom">here</a>.

## Put it to the test

Let's fill in the body of our `generateRandomDna` function! Here's what it should do:

1. The first line of code should create a random number, called `randomNum`, which has a `UInt64` type.

2. The second line should return `randomNum`.
