class Slingshot {
    constructor(body, point) {
        var options = {
            bodyA: body,
            pointB: point,
            stiffness: 0.01,
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
            line(posA.x, posA.y, posB.x, posB.y)
        }
    }

    fly() {
        //when the fly function is called - bodyA becomes null
        this.slingshot.bodyA = null
    }
}
