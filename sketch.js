this.snow = [] ;
function preload(){
  snowbg=loadImage("snow3.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  snow.push(new Snow(200,200))
}

function draw() {
  background(snowbg);

  if(frameCount%60===0){
    snow.push(new Snow(random(0,800),0))
    console.log(22);
  }
  for (var k = 0; k <snow.length;k++ ) {
    image(this.snowbg, this.snow[k][0], this.snow[k][1]);
   // snow[k].display();
    console.log(12);
  }

}

