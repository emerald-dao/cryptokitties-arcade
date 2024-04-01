# Structs

Sometimes you need a more complex data type. For this, Cadence provides structs:

```swift
access(all) struct Person {
  access(all) let age: String
  access(all) let name: String

  init(age: String, name: String) {
    self.age = age
    self.name = name
  }
}
```

Structs allow you to create more complicated data types that have multiple properties.

## Put it to the test

In our app, we're going to want to create some Kitties! And Kitties will have multiple properties, so this is a perfect use case for a struct.

1. Create a struct named `Kitty`.

Our `Kitty` struct will have 2 properties: **name** (a `String`), and **dna** (a `UInt64`).
