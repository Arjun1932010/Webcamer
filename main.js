function take_snapshot(){
    save("Webselfie.png");
}
function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(600,400);
    video.hide();
}
function draw(){
    image(video,0,0,600,400);
}