input.onButtonPressed(Button.A, function () {
    // Map the accelerometer's X-axis reading (-1024 to 1024) to a 10-bit value (0 to 1023)
    analogValue = Math.map(input.acceleration(Dimension.X), -1024, 1024, 0, 1023)
    // Optional: Send the value to the serial console for debugging
    serial.writeValue("value", analogValue)
    // Play the START tone
    // Play Middle C for 150ms
    music.playTone(262, 150)
    basic.pause(200)
    for (let index = 9; index >= 0; index--) {
        // Isolate the bit at the current 'index' position
        bit = (analogValue >> index) & 1

        // Display a "1" or "0" on the LED matrix
        if (bit == 1) {
            basic.showString("1") // Represents the GREEN LED for a '1'
        } else {
            basic.showString("0") // Represents the RED LED for a '0'
        }
        basic.pause(250) // Pause to make the sequence readable
    }
// Play the END tone (a "double tone" melody)
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    basic.pause (500)
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    basic.clearScreen()
})
let bit = 0
let analogValue = 0
