// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`2000080008080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808010601060808080808080808080806060108080801060108080808080808080808080808080808080808080808080808080808080808080106080808080808080808080808080808080808080808080808080808080808080808060606080806070808080601080808080808080808080808080808080808080605050506080801060101060106060101060808080808080808080808010101010505050606080202020202020202020204030403040304030403040304020202020202020303`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . 2 2 2 . . . 2 2 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . 2 
. . . . 2 2 . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 2 2 2 2 . . . 2 2 . 
. . . . . . . . . . 2 . . . . . . . . . . . 2 . . . . . . . 2 . 
`, [myTiles.transparency16,sprites.dungeon.floorDark3,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.hazardLava1,sprites.dungeon.hazardLava0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.floorLight3,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
