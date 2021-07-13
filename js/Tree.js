class Tree {
    constructor(x,y) {
        
      this.x = x
      this.y = y
      this.width = 450
      this.height = 600
      this.thickness = 10 
      this.image = loadImage("Plucking mangoes/tree.png");
      this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic:true}) 
      this.leftWallBody=Bodies.rectangle(0, this.y-this.height/2, this.thickness, this.height, {isStatic:false}) 
      this.rightWallBody=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.height, {isStatic:false}) 
      World.add(world, this.bottomBody) 
      World.add(world, this.leftWallBody) 
      World.add(world, this.rightWallBody);
  
    }
    display(){
      var pos =this.bottomBody.position;
      push()
      translate(pos.x,pos.y + 10)
      fill("brown");
      imageMode(CENTER)
      image(this.image, 0, -this.height/2,this.width, this. height);
      pop()
    }
  };
