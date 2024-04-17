import "KittyCreator"
access(all) fun main(kittyIndex: Int): KittyCreator.Kitty {
    return KittyCreator.kitties[kittyIndex]
}