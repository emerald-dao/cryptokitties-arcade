access(all) contract KittyCreator {
    access(all) var totalKitties: UInt64

    access(all) fun createKitty(name: String, dna: UInt64) {
        self.totalKitties = self.totalKitties + 1
    }

    init() {
        self.totalKitties = 0
    }
}