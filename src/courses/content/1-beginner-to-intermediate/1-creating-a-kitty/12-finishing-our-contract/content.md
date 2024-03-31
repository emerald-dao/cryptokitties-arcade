# Finishing our Contract

We're close to being done with our `KittyCreator` contract! Let's create a public function that ties everything together.

We're going to create a public function that takes an input, the Kitty's name, and uses the name to create a Kitty with random DNA.

# Put it to the test

1. Create a public function named `createRandomKitty`. It will take one parameter named `name` (a `String`). _Note: Declare this function public._

2. The first line of the function should run the `generateRandomDna` function on `name`, and store it in a `UInt64` named `randDna`.

3. The second line should run the `createKitty` function and pass it `name` and `randDna`.
