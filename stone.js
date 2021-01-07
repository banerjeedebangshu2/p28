class Stone{

    constructor(x,y,width,height) {

        var options = {
            'restitution': 0.2,
            'friction': 1,
            'density': 1,
        }

        this.body = Bodies.rectangle(x,y,width,height,options);

        this.image = loadImage("sprites/stone.png");

        this.width = width;
        this.height = height;

        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width*2, this.height*2)



    }






}