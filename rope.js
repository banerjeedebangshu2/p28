class Rope {

    constructor(bodyA,pointB){

        var options = {

            bodyA: bodyA,
            pointB: pointB,

            sniffness: 0.04,
            length: 30,
        }

        this.rope = Constraint.create(options);
        this.pointB = pointB;

        World.add(world,this.rope);

    }

    fly(){

        this.rope.bodyA = null;
    }


    display(){

        if (this.rope.bodyA) {

        var bodyA = this.rope.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(2);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);

        }

    }

}