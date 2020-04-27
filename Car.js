class Car {
constructor(width,speed){
this.x=50;
this.y=200;
this.sprite=createSprite(this.x,this.y,50,50);
this.width=width;
this.speed = speed;
this.sprite.velocityX = this.speed;
this.sprite.shapecolor=color(255);

}


}