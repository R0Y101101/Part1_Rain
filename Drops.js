class Drops{
    constructor(x, y, width, height) {
        this.body = Bodies.circle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("blue");
        circle(0, 0, this.width, this.height)
        pop();
      }
}