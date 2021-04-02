namespace SpriteKind {
    export const door1 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, tiles.util.door1, function (sprite, location) {
    tiles.loadConnectedMap(ConnectionKind.Door1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (DimensionJumper.isHittingTile(CollisionDirection.Bottom)) {
        DimensionJumper.vy = -80
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, tiles.util.door6, function (sprite, location) {
    tiles.loadConnectedMap(ConnectionKind.Door1)
})
let DimensionJumper: Sprite = null
let tilemap1 = tiles.createMap(tilemap`level8`)
let tilemap2 = tiles.createMap(tilemap`level0`)
tiles.loadMap(tilemap1)
DimensionJumper = sprites.create(img`
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(DimensionJumper, assets.tile`myTile`)
tiles.coverAllTiles(assets.tile`myTile`, assets.tile`myTile0`)
controller.moveSprite(DimensionJumper, 100, 0)
DimensionJumper.ay = 150
scene.cameraFollowSprite(DimensionJumper)
tiles.connectMapById(tilemap1, tilemap2, ConnectionKind.Door1)
info.setScore(0)
