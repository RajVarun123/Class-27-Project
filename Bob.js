class Bob{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'frictionAir':0.0002,
            'density':5.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        stroke("teal");
        fill("teal");
        ellipse(0, 0, this.radius);
        pop();
      }
}