class rope{
	constructor(body1, body2, pointA, pointB)
	{
		this.pointA = pointA;
		this.pointB = pointB;

		var options = {
			
			stiffness: 0.1,
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}
		}
		//create rope constraint here
		    this.rope = Matter.Constraint.create(
			options
		  )

		  World.add(world, this.rope);

	}


    display(){
		line(this.rope.bodyA.position.x, this.rope.bodyA.position.y,this.rope.bodyB.position.x + this.pointA, this.rope.bodyB.position.y + this.pointB);
		strokeWeight(2);

	}

}
