# Transactions

We have finished our `KittyCreator` contract, but we are not yet done. Remember, in Cadence you cannot interact with your contract directly. You need to use a transaction to call the functions in your contract and change its data.

Also know that transactions (and scripts) are separate from contracts and are written in different files, but they import contracts to interact with them. Transactions can import any number of deployed contracts, so you can combine many different actions (across contracts) into 1 transcation.

An empty transaction looks like this:

```swift
transaction() {
    prepare(signer: &Account) {

    }

    execute {

    }
}
```

Let's say we have a contract named `Example` that has a public function named `add` that accepts two numbers.

We can execute this function by running a transaction like so:

```swift
import "Example"

// we pass arguments to transaction here
transaction(x: UInt64, y: UInt64) {
    prepare(signer: &Account) {

    }

    execute {
        Example.add(x: x, y: y)
    }
}
```

Transactions have 2 stages:

1. prepare - to access/manipulate data inside the signer’s account. _Note: We will cover this later._
2. execute - calling contract functions

## Put it to the test

1. In the `create_kitty.cdc` file, create a transaction that calls the `createRandomKitty` function in your `KittyCreator` contract.

2. Your `createRandomKitty` function accepts a `name` (a `String`) argument, so you should create a transaction argument called `name` as well.
