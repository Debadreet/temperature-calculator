devices.onNotified(MesDeviceInfo.IncomingCall, function () {
    basic.showString("Incomming call")
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    devices.tellCameraTo(MesCameraEvent.TakePhoto)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
devices.onNotified(MesDeviceInfo.IncomingMessage, function () {
    basic.showString("Incomming message")
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + input.temperature() + " celsius")
})
basic.forever(function () {
    serial.writeLine("" + input.temperature() + " celsius")
    serial.writeLine("Light level- " + input.lightLevel())
})
