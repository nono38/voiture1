radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        kitronik_servo_lite.left()
    } else if (receivedNumber == 2) {
        kitronik_servo_lite.right()
    } else if (receivedNumber == 3) {
        kitronik_servo_lite.forward()
    } else if (receivedNumber == 4) {
        kitronik_servo_lite.stop()
    } else if (receivedNumber == 5) {
        kitronik_servo_lite.turnRight(90)
    }
})
radio.setGroup(210)
