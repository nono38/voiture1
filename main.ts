radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        kitronik_servo_lite.left()
    } else if (receivedNumber == 2) {
        kitronik_servo_lite.right()
    } else if (receivedNumber == 4) {
        kitronik_servo_lite.forward()
    } else if (receivedNumber == 4) {
        kitronik_servo_lite.stop()
        kitronik_servo_lite.stop()
    } else if (receivedNumber == 5) {
        kitronik_servo_lite.turnRight(90)
    }
})
kitronik_servo_lite.setDistancePerSecond(400)
radio.setGroup(210)
