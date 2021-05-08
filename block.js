class Box{
    constructor(x,y){
    var option = {
        restitution:0.1
        }
        this.body = Bodies.rectangle(x,y,30,40,option);
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);
      }
}