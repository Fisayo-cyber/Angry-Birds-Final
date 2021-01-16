class Slingshot {
    constructor(body, point) {

        this.image = loadImage("sprites/sling3.png")
        var options = {
            bodyA: body,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        //Constraint
        this.slingshot = Constraint.create(options)
        World.add(world, this.slingshot)

    }

    display() {
        if (this.slingshot.bodyA) {
            var posA = this.slingshot.bodyA.position // bodyA is null. cannot read position of null
            var posB = this.slingshot.pointB
            push()
            stroke("#301707")
            strokeWeight(4)
            if (posA.x < 260) {
                line(posA.x - 15, posA.y, posB.x - 20, posB.y)
                line(posA.x + 15, posA.y, posB.x + 20, posB.y)
                imageMode(CENTER)
                image(this.image, posA.x - 25, posA.y, 20, 40)
            } else {
                line(posA.x + 15, posA.y, posB.x - 20, posB.y)
                line(posA.x - 10, posA.y - 10, posB.x + 20, posB.y)
                imageMode(CENTER)
                image(this.image, posA.x + 30, posA.y, 20, 40)

            }
            pop()

        }
    }

    fly() {
        //when the fly function is called - bodyA becomes null
        this.slingshot.bodyA = null
    }

    attach(body) {
        this.slingshot.bodyA = body;
    }
}
