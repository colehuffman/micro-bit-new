function green () {
    strip = neopixel.create(DigitalPin.P16, 24, NeoPixelMode.RGB)
    strip.setBrightness(16)
    basic.showIcon(IconNames.StickFigure)
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(3, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
function yellow () {
    strip = neopixel.create(DigitalPin.P16, 24, NeoPixelMode.RGB)
    strip.setBrightness(16)
    basic.showIcon(IconNames.StickFigure)
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(3, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Ultrasound () {
	
}
function red () {
    strip = neopixel.create(DigitalPin.P16, 24, NeoPixelMode.RGB)
    strip.setBrightness(16)
    basic.showIcon(IconNames.StickFigure)
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(3, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let distance = 0
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
while (true) {
	
}
basic.forever(function () {
    green()
    yellow()
    red()
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.pause(200)
})
