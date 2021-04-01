controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (DimensionJumper.isHittingTile(CollisionDirection.Bottom)) {
        DimensionJumper.vy = -80
    }
})
let DimensionJumper: Sprite = null
tiles.loadMap(tiles.createMap(tilemap`level1`))
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
