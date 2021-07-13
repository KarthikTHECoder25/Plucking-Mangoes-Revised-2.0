class Stone{
    constructor(x,y,r){
        var options={
            isStatic: true,
            restitution:0,
            friction: 1,
            density: 0.8

        }
        this.x = x
        this.r = r
        this.y = y
        this.image = loadImage("Plucking mangoes/stone.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body) 
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.position.angle)
        fill(255)
        imageMode(CENTER)
        ellipseMode(CENTER)
        image(this.image, 0, 0, this.r * 2, this.r * 2);
        pop()
    }
} 
