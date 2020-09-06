class Plinko{
    constructor(x, y, radius) {
        var options = {
            restitution:0.1,
            friction:0.5,
            density:1.2,
            isStatic:true 
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var pos;
        pos = this.body.plinko;
        ellipse(pos.x,pos.y,this.radius,this.radius);
        if(frameCount%60===0){
            plinko.push(new Plinko(random(width/2-10,width/2+10),10,10));
          }
      }
    }
  