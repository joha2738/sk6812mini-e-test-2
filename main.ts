let item = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
let delay = 300
let delay2 = 70
basic.forever(function () {
    for (let index = 0; index < 100; index++) {
        for (let index = 0; index <= 5; index++) {
            item.range(index, 1).showColor(neopixel.colors(NeoPixelColors.Green))
            item.shift(2)
            basic.pause(delay2)
        }
    }
})
