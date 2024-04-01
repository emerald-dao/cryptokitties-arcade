# Arrays

When you want a collection of something, you can use an array.

```swift
access(all) let dynamicArray: [String]
```

You can also create an array of structs. Using the previous chapter's `Person` struct:

```swift
access(all) let people: [Person]
```

Remember that state variables are stored permanently in the blockchain? So creating a dynamic array of structs like this can be useful for storing structured data in your contract, kind of like a database.

### Note on Access

We have been using `access(all)` a lot on our variables and functions. This simply means it is public, so anyone can get it.

Example:

```swift
access(all) contract Example {
    access(all) let names: [String]

    init() {
        self.names = []
    }
}
```

You could get `names` in a different contract, transaction, or script by simply doing:

```swift
let names: [String] = Example.names
```

We will cover how to restrict this access later.

## Put it to the test

We're going to want to store a bunch of Kitties in our app.

1. Create an array of Kitty structs, and name it `kitties`.

Note: When declaring your array, use `let` instead of `var`. It is common practice to use `let` with arrays (and later, dictionaries) because it is safer. You will still be able to add/remove from the array, but won't be able to set the entire value directly.
