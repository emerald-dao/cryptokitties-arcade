access(all) contract KittyCreator {
    access(all) let totalKitties: UInt64

    init() {
        self.totalKitties = 0
    }
}