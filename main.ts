function green () {
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(3, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.A, function () {
    A += 1
})
function Black () {
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(3, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
input.onButtonPressed(Button.B, function () {
    Black()
    control.reset()
})
function RedGreenYellowCycle () {
    red()
    basic.pause(5000)
    green()
    basic.pause(5000)
    yellow()
    basic.pause(5000)
}
function RedGreenCountdownYellow2 () {
    red()
    basic.pause(5000)
    green()
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(9 - index)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    yellow()
    basic.pause(2000)
}
function RedGreenCountdownYellow () {
    red()
    basic.pause(5000)
    green()
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(9 - index)
    }
    yellow()
    basic.pause(2000)
}
function yellow () {
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(3, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Ultrasound () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P12, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P12, 0)
    distance = pins.pulseIn(DigitalPin.P13, PulseValue.High) / 58
    basic.pause(1000)
}
function red () {
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(3, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range: neopixel.Strip = null
let distance = 0
let strip: neopixel.Strip = null
pins.setAudioPin(AnalogPin.P0)
let A = 0
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(16)
while (true) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    while (A > 0) {
        red()
        while (distance != 0) {
            while (distance <= 5) {
                if (A == 1) {
                    RedGreenYellowCycle()
                    red()
                } else if (A == 2) {
                    basic.showLeds(`
                        . . # . #
                        . # # # .
                        # . # . .
                        . # . # .
                        # . . . #
                        `)
                    RedGreenCountdownYellow()
                    red()
                    basic.showLeds(`
                        . # # # .
                        . # # # .
                        # # # # .
                        # # # # .
                        . # # # .
                        `)
                } else if (A == 3) {
                    basic.showLeds(`
                        . . # . #
                        . # # # .
                        # . # . .
                        . # . # .
                        # . . . #
                        `)
                    RedGreenCountdownYellow2()
                    red()
                    basic.showLeds(`
                        . # # # .
                        . # # # .
                        # # # # .
                        # # # # .
                        . # # # .
                        `)
                }
                Ultrasound()
            }
            Ultrasound()
        }
        Ultrasound()
    }
}
