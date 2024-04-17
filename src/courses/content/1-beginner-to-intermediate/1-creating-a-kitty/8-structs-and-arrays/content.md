# Working with Structs and Arrays

### Creating New Structs

Remember our Person struct in the previous example?

```swift
access(all) struct Person {
  access(all) let age: String
  access(all) let name: String

  init(age: String, name: String) {
    self.age = age
    self.name = name
  }
}

access(all) let people: [Person]
```

Now we're going to learn how to create new `Person`s and add them to our `people` array.

```swift
// create a new Person:
let satoshi: Person = Person(age: 172, name: "Satoshi")

// Add that person to the array:
people.append(satoshi);
```

Note that `array.append()` adds something to the end of the array, so the elements are in the order we added them. See the following example:

```swift
let numbers: [UInt64]
numbers.append(5);
numbers.append(10);
numbers.append(15);
// numbers is now equal to [5, 10, 15]
```

## Put it to the test

Let's make our `createKitty` function do something!

1. Fill in the function body so it creates a new `Kitty` and adds it to the `kitties` array. The name and dna for the new `Kitty` should come from the function arguments.

Do it in two lines, first by creating the new `Kitty` struct named `newKitty` and second by adding it to the `kitties` array.
