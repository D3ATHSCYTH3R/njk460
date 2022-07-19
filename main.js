nx=0;
nyc=0;
function preload(){
cn=loadImage("1.png");
}
function setup(){
canvas=createCanvas(650, 450);
canvas.position(325, 150);
video=createCapture(VIDEO);
video.size(650,450);
video.hide();
posenet=ml5.poseNet(video, callanyfunction);
posenet.on('pose', callanotherfunction);

}
function draw(){
image(video,0,0,650,450);
image(cn,nx-120,nyc-90,290,291);

}
function ts(){
    save("bird.png");
}
function callanyfunction(){
    console.log("posenet is loaded");
}
function callanotherfunction(results){
if(results.length>0){
    console.log(results);
    nx=results[0].pose.nose.x;
    nyc=results[0].pose.nose.y;
    
    console.log("nose,x="+nx);
    console.log("nose,y="+nyc);
}
}