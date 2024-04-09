access(all) contract KittyCreator {
    access(all) var totalKitties: UInt64
    access(all) let kitties: [Kitty]

    // declare your event here

    access(all) struct Kitty {
        access(all) let name: String
        access(all) let dna: UInt64

        init(name: String, dna: UInt64) {
            self.name = name
            self.dna = dna
        }
    }

    access(self) fun createKitty(name: String, dna: UInt64) {
        self.totalKitties = self.totalKitties + 1
        let newKitty: Kitty = Kitty(name: name, dna: dna)
        self.kitties.append(newKitty)
    }

    access(self) fun generateRandomDna(): UInt64 {
        let randomNum: UInt64 = revertibleRandom<UInt64>()
        return randomNum
    }

    access(all) fun createRandomKitty(name: String) {
        let randDna: UInt64 = self.generateRandomDna()
        self.createKitty(name: name, dna: randDna)
        // emit your event here
    }

    init() {
        self.totalKitties = 0
        self.kitties = []
    }
}