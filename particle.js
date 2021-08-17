class Particle {
    constructor(x, y) {
        let options = {

            'isStatic' : false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.r = 7;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(1, 255), random(1, 255), random(1, 255));
        World.add(world, this.body);

    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }

}