Status = "";
bottle_image = "";

function preload() {
   bottle_image = loadImage("Bottle.jpeg");
}

function setup() {
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("Status").innerHTML = "Statuss : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded");
    Status = true;
    object_detector.Detect(bottle_image, gotResults);

}

function gotResults(results, error) {
 if(error) {
    console.log(error);
 }
 console.log(results);
}

function draw() {
    image(bottle_image,0,0);
}