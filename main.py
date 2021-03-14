def on_received_number(receivedNumber):
    if receivedNumber == 1:
        kitronik_servo_lite.turn_left(20)
    elif receivedNumber == 2:
        kitronik_servo_lite.turn_right(20)
    elif receivedNumber == 3:
        kitronik_servo_lite.drive_forwards(50)
radio.on_received_number(on_received_number)

radio.set_group(210)