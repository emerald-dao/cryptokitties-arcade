access(all) contract KittyCreator {
    access(all) let totalKitties: UInt64

    access(all) fun createKitty(name: String, dna: UInt64) {
        // add your code below
        
    }

    init() {
        self.totalKitties = 0
    }
}