function preload () {
    // no
}
function setup () {
    var canvas = createCanvas(800, 500)
    canvas.position(385, 300)
    video = createCapture(VIDEO)
    video.hide()
}
function draw () {
    image(video, 10, 10, 780, 480)
}
function take_snapshot () {
    save("png.png")
}