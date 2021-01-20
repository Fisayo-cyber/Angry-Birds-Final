class Bird extends BaseClass {
    constructor(x, y) {
        super(x, y, 50, 50)
        this.image = loadImage("sprites/bird.png")
        this.smoke = loadImage("sprites/smoke.png")
        this.trail = []
        Matter.Body.setDensity(this.body, 0.002)
    }

    // [[x1,y1],[x2,y2],[x3,y3],[x4,y4]....[xn,yn]] - [
    // image(img,this.trail[0][0],this.trail[0][1])
    // image(img,this.trail[1][0],this.trail[1][1])
    // image(img,this.trail[2][0],this.trail[2][1])
    // image(img,this.trail[3][0],this.trail[3][1])
    //

    display() {
        //this.body.position.x = mouseX; this.body.position.y = mouseY;
        super.display();
        if (this.body.speed > 10 && this.body.position.x >260) {
            var pos = [this.body.position.x, this.body.position.y]
            
            this.trail.push(pos)

            for (var i = 0; i < this.trail.length; i = i + 1) {
                image(this.smoke, this.trail[i][0], this.trail[i][1])
            }
        }
    }
}