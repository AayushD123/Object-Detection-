

function preload()
{
img = loadImage("10717708.jpeg");
}

img = "";
Status = "";
objects = [];





function setup()
{
 Canvas = createCanvas(640,420);
 Canvas.center();

 objectDetector = ml5.objectDetector('cocossd',modelLoaded);
 document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modelLoaded()
{
 console.log("model loaded");
 Status = true;
 objectDetector.detect(img,gotResult);



}

function gotResult(error,results)
{
 if(error)
 {
   console.error(error);
 }
 else
 {
   console.log(results);
   objects = results;
 }
}

function draw()
{
   image(img,0,0,640,420);
   if(Status != "");
   {
     for(i = 0; i < objects.length; i++)
     {
       document.getElementById("status").innerHTML = "Status : Object Detected";
        fill("#1002d4");

        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
        noFill();
        stroke("#32a8a8");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       
     }

   }
  
}

