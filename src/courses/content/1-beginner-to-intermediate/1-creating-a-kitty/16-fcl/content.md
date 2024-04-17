# FCL

Our Cadence contract, transaction, and script are complete! Now we need to write a JavaScript frontend that interacts with our transaction and script.

Flow has a JavaScript library called the Flow Client Library, or FCL for short.

In a later lesson, we'll go over in depth how to deploy a contract and set up FCL. But for now let's just look at some sample code for how FCL would interact with our deployed contract, or more specifically, its transactions and scripts.

Don't worry if this doesn't all make sense yet.

```javascript
import * as fcl from "@onflow/fcl";

const contractAddress = /* our contract address on Flow after deploying */

// some sort of event listener to take the text input:
$("#ourButton").click(function(e) {
  let name = $("#nameInput").val()
  // Call our `create_kitty.cdc` transaction:
  const response = await fcl.mutate({
    cadence: `
    import KittyCreator from ${contractAddress}
    transaction(name: String) {
        prepare(signer: &Account) {

        }

        execute {
            KittyCreator.createRandomKitty(name: name)
        }
    }
    `,
    args: (arg, t) => [arg(name, t.String)],
    payer: fcl.authz,
    proposer: fcl.authz,
    authorizations: [fcl.authz]
  });
})

// listen for the `NewKitty` event, and update the UI
const event = `A.${contractAddress.slice(2)}.KittyCreator.NewKitty`;
fcl.events(event).subscribe((eventData) => {
  generateKitty(eventData.dna)
});

// take the Kitty dna, and update our image
function generateKitty(dna) {
    let imageOptions = [
        '/images/cats/vegetation-cat.png',
        '/images/cats/sailor-cat.png',
        '/images/cats/medieval-cat.png',
        '/images/cats/fire-cat.png'
	];
    let chosenImageIndex = dna % 4;
    return imageOptions[chosenImageIndex]
}
```

What our JavaScript then does is take the image path randomly chosen in `generateKitty` above and display it on our frontend.

## Give it a try!

Go ahead — type in your name to the box on the right, and see what kind of Kitty you get!

Once you have a Kitty you're happy with, go ahead and click "Next Chapter" below to save your Kitty and complete chapter 1!
