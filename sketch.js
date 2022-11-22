//I did followed a tutorial to solve the assignment because I found it pretty complex to solve it alone.
//https://www.youtube.com/watch?v=AbB9ayaffTc&list=WL&index=1&t=12s
//I also had lots of problems with localhost and ngrok 

let permissionGranted = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
    
    DeviceOrientationEvent.requestPermission()
    .catch(() => {
      let button = createButton("click to allow access to sensors");
      button.style("font-size", "24px");
      button.center();
      button.mousePressed(requestAccess);
      throw error;
    })
    .then(() => {
      permissionGranted = true;
    })
  }else {
    textSize(48);
    text("non ios device", 100, 100);
  }
  
}

function requestAccess(){
  DeviceOrientationEvent.requestPermission()
  .then(response => {
    if(response=='granted'){
      permissionGranted = true;
    }else{
      persmissionGranted = false;
    }
  })
  .catch(console.error);
  this.remove();
}

function draw() {
  if (!permissionGranted) return;
  //background(220);
  
  const dx = constrain(rotationY, -3, 3);
  const dy = constrain(rotationX, -3, 3);
  cx += dx*2;
  cy += dy*2;
  cx = constrain(cx, 0, width);
  cy = constrain(cy, 0, height);
  
  ellipse(cx, cy, 200, 200);
  
}