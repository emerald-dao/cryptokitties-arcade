# Scripts

Like transactions, scripts are written in separate files. Scripts are used to read data in a contract. Any actions you perform in a script will get reverted when it is over.

An empty script looks like this:

```swift
access(all) fun main() {

}
```

Let's say we have a contract named `Example` that has a public variable named `people` that has type `[Person]`, where `Person` is a struct defined in that contract.

We can fetch a `Person` like so:

```swift
import "Example"

access(all) fun main(peopleIndex: Int): Example.Person {
    return Example.people[peopleIndex]
}
```

## Put it to the test

1. In the `read_kitty.cdc` file, create a script that accepts a `kittyIndex` (an `Int`) argument and returns the `Kitty` at that index from the `kitties` array.
