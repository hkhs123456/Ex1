input.onGesture(Gesture.Shake, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
basic.showIcon(IconNames.Heart)
basic.showString("Hello!")
music.playMelody("- - - - - - - - ", 120)
