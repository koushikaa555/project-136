video="";
status="";
function preload()
{
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function setup()
{
  canvas = createCanvas(580, 480);
  canvas.center();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status = model Is detecting objects";
   objects =  document.getElementById("object").value;
}
function modelLoaded()
{
    console.log('Model Loaded');
    status = true;
}
function draw(){
    image(video,0,0,580,480);
}