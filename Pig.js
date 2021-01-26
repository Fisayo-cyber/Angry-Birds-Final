class Pig extends BaseClass {

    constructor(x, y) {
        super(x, y, 50, 50)
        this.image = loadImage("sprites/enemy.png")
        this.visiblity = 255
    }

    display() {
        if (this.body.speed < 4) {
            super.display();
        } else {
            World.remove(world, this.body)
            push();
            tint(255, this.visiblity)
            image(this.image, this.body.position.x, this.body.position.y, 50, 50)
            this.visiblity = this.visiblity - 7
            pop();
        }
    }
    score() {
        if (this.visiblity < 255 && this.visiblity > 0) {
            score = score + 5
        }
         
    }
}
