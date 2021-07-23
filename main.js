noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('data:image/png;base64,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');
}

function setup()
{
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Posenet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY)
        console.log(results);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose, noseX, noseY, 30, 30)
}

function take_snapshot()
{
    save('myfilterImage.png');
}