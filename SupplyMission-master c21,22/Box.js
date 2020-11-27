class Box {
  constructor(x,y,width,height){
   
  
    this.box = Bodies.rectangle(x,y,width,height);
    World.add(world, this.box);
    var box_options = {
     SetStatic: true
  }

    this.width = width;
    this.height = height;
  };
  display(){
      rectMode(CENTER);
      fill("red");
      rect(this.box.position.x, this.box.position.y, this.width, this.height);
  }
}
