class Tree{

    constructor(x,y,width,height) {

        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,0,0,options);

        this.image = loadImage("sprites/tree.png");

        this.width = width;
        this.height = height;

        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height)



    }






}