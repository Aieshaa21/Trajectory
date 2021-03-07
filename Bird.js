class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png");

    this.rejectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
if(this.body.velocity.x>10&&this.body.position.x>210){

    super.display();
    var position=[this.body.position.x,this.body.position.y];
    this.rejectory.push(position)
    for (var i=0;i<this.rejectory.length; i++){
      image(this.smokeImage,this.rejectory[i][0],this.rejectory[i][1])
    }
  }
}
}