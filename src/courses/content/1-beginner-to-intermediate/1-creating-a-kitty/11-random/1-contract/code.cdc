access(all) contract KittyCreator {
    access(all) var totalKitties: UInt64
    access(all) let kitties: [Kitty]

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
        // insert your code below
    }

    init() {
        self.totalKitties = 0
        self.kitties = []
    }
}