let D = 0
basic.forever(function () {
    D = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.MicroSeconds
    )
    while (D == 5) {
        basic.showIcon(IconNames.Heart)
    }
})
