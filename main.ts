controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -150
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . 9 d d d 9 . . . . . . 
    . . . . . 9 f d f 9 . . . . . . 
    . . . . . 9 d d d 9 . . . . . . 
    . . . . . 9 9 d 9 9 . . . . . . 
    . . . d d d 3 3 3 d d d . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . . d . d . . . . . . . 
    . . . . . . d . d . . . . . . . 
    `, SpriteKind.Player)
mySprite.startEffect(effects.hearts)
controller.moveSprite(mySprite, 100, 0)
tiles.setTilemap(tilemap`level1`)
mySprite.ay = 200
scene.cameraFollowSprite(mySprite)
forever(function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
})
