import "KittyCreator"
access(all) fun main(kittyId: Int): KittyCreator.Kitty {
    return KittyCreator.kitties[kittyId]
}