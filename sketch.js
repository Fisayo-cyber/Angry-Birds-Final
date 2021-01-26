// namespacing or aliasing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground
var engine;
var world;
var bg;
var box1;
var box2;
var box3,box4
var box5;
var pig1;
var log1;
var log3,log4;
var pig2,log2;
var bird;
var bgImage
var sling1,sling2
var platform
var slingshot;   
var score = 0
    //Primary data types 
    //Number
 var num = 12
    
    //String
var str = "Hello World"
var str1 = "12"

//Boolean
var bool = true

//null
var obj = null

//undefined
    var obj1;
    console.log(obj1)

    //Array - Data Structure
    var arr = [1, 2, 3, 4, 5]

var arr1 = [12, "Fisayo", null]
    

    console.log(arr1.length)

    //index - position of the things inside an array - 0 .... length-1
    console.log(arr1[1])

    var arr2 = [[1,2],["hello", null],["world", 32]]
    console.log(arr2[2][1])
    //push adds something at the end of an array
    arr2.push("Pushing")
    console.log(arr2) // arr2 = [[1,2],["hello", null],["world", 32],"Pushing"]
    //pop removes the last thing in an array
    arr2.pop()
    console.log(arr2)

    //Object - JavaScript Object Notation - JSON... Class Person - 
    var gameState = "onSling" 
    
    var person = {
      name: "Fisayo",
      age: 12,
      height: 150
    }

    console.log(person.name)

    function preload() {
      bgImage = loadImage("sprites/bg.png")
      sling1 = loadImage("sprites/sling1.png")
      sling2 = loadImage("sprites/sling2.png")
      getBgImage()
    }

    function setup() {
      createCanvas(1200, 400);

      engine = Engine.create();
      world = engine.world

      //restitution, isStatic, density, friction - different properties

      Engine.run(engine)

      ground = new Ground(600, 400, 1200, 20);

      box1 = new Box(600, 360, 60, 60);
      box2 = new Box(800, 360, 60, 60);
      box3 = new Box(600, 280, 60, 60);
      box4 = new Box(800, 280, 60, 60);
      box5 = new Box(700, 200, 60, 60)
      pig1 = new Pig(700, 360)
      pig2 = new Pig(700, 280)
      log1 = new Log(700, 320, 280, PI / 2)
      log2 = new Log(700, 240, 280, PI / 2)
      log3 = new Log(650, 160, 140, PI / 6)
      log4 = new Log(750, 160, 150, -PI / 6)
      bird = new Bird(255, 100)
      platform = new Ground(150, 325, 300, 150)
      slingshot = new Slingshot(bird.body, {
        x: 255,
        y: 100
      })

      // degrees - measure of angle RADIANS 180 = PI radians (PI = 22/7 = 3.14...) 90
      // = PI/2 PI
    }

    function draw() {

      if(bg){
        background(bg);
      }
      else{
        background("lightblue")
      }
      rectMode(CENTER)

      box1.display()
      box2.display()
      box3.display()
      box4.display()
      box5.display()
      ground.display()
      pig1.display()
      pig2.display()
      pig1.score()
      pig2.score()
      log1.display()
      log2.display()
      log3.display()
      log4.display()
      image(sling1, 250, 70)
      bird.display()
      slingshot.display()
      image(sling2, 220, 65)
      platform.display()

      text(mouseX + "," + mouseY, mouseX, mouseY)
      text("Score:" + score, 900, 85)

    }
    
function mouseDragged() {
  if (gameState === "onSling") {
    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY })
  }
}

function mouseReleased() {
    slingshot.fly()
    gameState = "launched"
}
//angular velocity - speed at which something is rotating
    function keyPressed() {
      if (keyCode === 32) {
        Matter.Body.setPosition(bird.body, { x: 255, y: 100 })
        Matter.Body.setAngularVelocity(bird.body, 0)
        Matter.Body.setAngle(bird.body, 0)
        Matter.Body.setVelocity(bird.body, {x: 0, y:0})

        bird.trail = []
        slingshot.attach(bird.body)
        gameState = "onSling"
      }
    }

    //synchronous execution 
async function getBgImage(){
   var response =  await fetch("https://worldtimeapi.org/api/ip")
   var responseJSON = await response.json()
   console.log(responseJSON)

   var datetime = responseJSON.datetime
    console.log(datetime)
    var hour = datetime.slice(11, 13)
  console.log(hour)
  
  if(hour>=6 && hour<=18) {
    bg = loadImage("sprites/bg.png")
  }

  else {
    bg = loadImage("sprites/bg2.jpg")
  }
}