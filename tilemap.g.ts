// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`2000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010601060000000000000000000006060100000001060100000000000000000000000000000000000000000000000000000000000000000106000000000000000000000000000000000000000000000000000000000000000000060606000006000000000601000000000000000000000000000000000000000605050506000001060101060106060101060000000000000000000000010101010505050606000202020202020202020204030403040304030403040304020202020202020202`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 2 2 2 2 . . . 2 2 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorDark3,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.hazardLava1,sprites.dungeon.hazardLava0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.floorLight3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
