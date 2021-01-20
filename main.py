def on_notified_incoming_call():
    basic.show_string("Incomming call")
    music.start_melody(music.built_in_melody(Melodies.RINGTONE), MelodyOptions.ONCE)
devices.on_notified(MesDeviceInfo.INCOMING_CALL, on_notified_incoming_call)

def on_notified_incoming_message():
    basic.show_string("Incomming message")
    music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
devices.on_notified(MesDeviceInfo.INCOMING_MESSAGE, on_notified_incoming_message)

def on_logo_pressed():
    basic.show_string("" + str(input.temperature()) + " celsius")
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_forever():
    serial.write_line("" + str(input.temperature()) + " celsius")
    serial.write_line("Light level- " + str(input.light_level()))
    serial.write_line(" ")
basic.forever(on_forever)
