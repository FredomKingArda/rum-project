input.onButtonPressed(Button.A, function () {
    turnon = 1
})
input.onPinPressed(TouchPin.P2, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    temp = 15
    basic.pause(30000)
    basic.pause(60000)
    temp = input.temperature()
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    turnon = 0
})
let turnon = 0
let temp = 0
temp = input.temperature()
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(500)
})
basic.forever(function () {
	
})
basic.forever(function () {
    basic.pause(2000)
    if (turnon == 1) {
        basic.showNumber(temp)
        basic.pause(2000)
        if (input.temperature() == 15) {
            basic.showLeds(`
                # . . . .
                # # . # .
                . # # . #
                . # # . #
                . . . # .
                `)
        }
        if (input.temperature() == 15) {
            while (input.temperature() == 15) {
                pins.digitalWritePin(DigitalPin.P0, 1)
                basic.pause(30000)
                pins.digitalWritePin(DigitalPin.P0, 0)
                basic.pause(30000)
            }
        } else {
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
        if (input.temperature() == 16) {
            while (input.temperature() == 16) {
                pins.digitalWritePin(DigitalPin.P0, 1)
                basic.pause(30000)
                pins.digitalWritePin(DigitalPin.P0, 0)
                basic.pause(30000)
            }
        } else {
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
        if (input.temperature() == 17) {
            while (input.temperature() == 17) {
                pins.digitalWritePin(DigitalPin.P0, 1)
                basic.pause(30000)
                pins.digitalWritePin(DigitalPin.P0, 0)
                basic.pause(30000)
            }
        } else {
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
        if (input.temperature() == 18) {
            while (input.temperature() == 18) {
                pins.digitalWritePin(DigitalPin.P0, 1)
                basic.pause(30000)
                pins.digitalWritePin(DigitalPin.P0, 0)
                basic.pause(30000)
            }
        } else {
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
