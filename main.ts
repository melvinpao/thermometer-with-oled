input.onButtonPressed(Button.A, function () {
    OLED12864_I2C.on()
})
input.onButtonPressed(Button.B, function () {
    OLED12864_I2C.off()
})
let temp_current = 0
OLED12864_I2C.init(60)
let temp_min = 150
let temp_max = -150
let temp_trend: number[] = []
basic.forever(function () {
    temp_current = input.temperature()
    temp_trend.push(temp_current)
    if (temp_current > temp_max) {
        temp_max = temp_current
    }
    if (temp_current < temp_min) {
        temp_min = temp_current
    }
    OLED12864_I2C.showString(
    0,
    0,
    "Temp: " + temp_current + String.fromCharCode(39) + "C",
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "Max: " + temp_max + String.fromCharCode(39) + "C",
    1
    )
    OLED12864_I2C.showString(
    0,
    2,
    "Min: " + temp_min + String.fromCharCode(39) + "C",
    1
    )
    basic.pause(1000)
})
