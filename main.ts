let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < 0) {
        strip.rotate(1)
    } else {
        strip.rotate(-1)
    }
    strip.show()
})
