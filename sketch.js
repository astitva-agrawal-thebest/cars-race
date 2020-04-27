var car1,car2,car3;

function setup() {
  createCanvas(800,400);

  car1 = new Car(2260,60);
  car2 = new Car(1522,50);
  car3 = new Car(3000,45)
}

function draw() {
  background("black");  
  drawSprites();
}