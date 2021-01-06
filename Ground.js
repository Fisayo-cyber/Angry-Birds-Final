class Ground {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body)

    }

    display() {
        rectMode(CENTER)
        push();
        stroke("brown")
        strokeWeight("3")
        fill("brown")

        var pos = this.body.position
        rect(pos.x, pos.y, this.width, this.height)
        pop();
    }
}