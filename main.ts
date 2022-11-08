bitbot.select_model(BBModel.XL)
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.ledClear()
        bitbot.setPixelColor(5, 0xFFFF00)
        basic.showArrow(ArrowNames.East)
        bitbot.rotate(BBRobotDirection.Left, 15)
    } else if (bitbot.readLine(BBLineSensor.Right) == 1 && bitbot.readLine(BBLineSensor.Left) == 0) {
        bitbot.ledClear()
        bitbot.setPixelColor(11, 0xFFFF00)
        basic.showArrow(ArrowNames.West)
        bitbot.rotate(BBRobotDirection.Right, 15)
    } else {
        bitbot.ledRainbow()
        basic.showArrow(ArrowNames.North)
        bitbot.go(BBDirection.Forward, 23)
    }
})
