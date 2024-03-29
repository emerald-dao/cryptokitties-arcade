access(all) contract KittyCreator {
    access(all) let totalKitties: UInt64

    // add your function below

    init() {
        self.totalKitties = 0
    }
}