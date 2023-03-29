input.onButtonPressed(Button.A, function () {
    if (bits > 0) {
        bits = bits - 1
    } else {
        if (channel_no > decimal) {
            basic.showNumber(decimal)
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
        } else if (channel_no < decimal) {
            basic.showNumber(decimal)
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        } else {
            basic.showNumber(decimal)
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                # . . . #
                . # # # .
                `)
        }
        decimal = 0
        bits = 7
    }
})
input.onButtonPressed(Button.B, function () {
    decimal = 2 ** bits + decimal
    if (bits > 0) {
        bits = bits - 1
    } else {
        if (channel_no > decimal) {
            basic.showNumber(decimal)
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
        } else if (channel_no < decimal) {
            basic.showNumber(decimal)
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        } else {
            basic.showNumber(decimal)
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                # . . . #
                . # # # .
                `)
        }
        decimal = 0
        bits = 7
    }
})
let bits = 0
let channel_no = 0
let decimal = 0
let binary = ""
decimal = 0
channel_no = 1
bits = 7
