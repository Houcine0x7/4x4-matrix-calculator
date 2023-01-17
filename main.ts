function scanKeys () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
    	
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        userinput = "" + userinput + "0"
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
    	
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        if (userinput == password) {
            pins.digitalWritePin(DigitalPin.P5, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P5, 0)
        }
    }
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        userinput = "" + userinput + "7"
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        userinput = "" + userinput + "8"
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        userinput = "" + userinput + "9"
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        if (userinput == password) {
            basic.clearScreen()
            I2C_LCD1602.clear()
        }
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        userinput = "" + userinput + "4"
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        userinput = "" + userinput + "5"
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        userinput = "" + userinput + "6"
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
    	
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        userinput = "" + userinput + "1"
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        userinput = "" + userinput + "2"
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        userinput = "" + userinput + "3"
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
    	
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
}
let userinput = ""
let password = ""
I2C_LCD1602.LcdInit(0)
password = "123"
pins.digitalWritePin(DigitalPin.P5, 0)
basic.forever(function () {
    scanKeys()
    makerbit.showStringOnLcd1602(userinput, makerbit.position1602(LcdPosition1602.Pos1), userinput.length)
    basic.pause(200)
})
basic.forever(function () {
	
})
