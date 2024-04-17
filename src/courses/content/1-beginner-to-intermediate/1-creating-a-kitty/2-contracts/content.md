# Contracts

Starting with the absolute basics:

Cadence's code is encapsulated in contracts, transactions, and scripts. A contract is the fundamental building block of Flow applications — all variables and functions belong to a contract, and this will be the starting point of all your projects.

Contracts cannot be interactd with directly, you must use transactions and scripts to write and read data, respectively. We will cover this later.

An empty contract named `HelloWorld` would look like this:

```swift
access(all) contract HelloWorld {

    // run only once when the
    // contract is deployed
    init() {

    }
}
```

## Put it to the test

To start creating our Kitty, let's create a base contract called `KittyCreator`.

1. Create an empty contract called `KittyCreator`.

When you're finished, click "Submit Answer" below. If you get stuck, you can click "Ask for Help".
