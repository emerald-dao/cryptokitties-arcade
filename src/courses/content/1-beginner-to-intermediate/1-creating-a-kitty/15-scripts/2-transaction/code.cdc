import "KittyCreator"
transaction(name: String) {
    prepare(signer: &Account) {

    }

    execute {
        KittyCreator.createRandomKitty(name: name)
    }   
}