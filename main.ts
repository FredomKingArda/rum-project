bluetooth.onBluetoothConnected(function () {
    bluetooth.startIOPinService()
    temp = input.temperature()
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # # . .
            # . # . #
            . # # # .
            # . # . #
            . # # . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    turnon = 1
})
input.onPinPressed(TouchPin.P2, function () {
    turnon = 0
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Space), function () {
    turnon = 1
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    temp = 15
    basic.pause(30000)
    basic.pause(60000)
    temp = input.temperature()
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Tab), function () {
    turnon = 0
})
let turnon = 0
let temp = 0
temp = input.temperature()
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1000)
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
