// namespacing or aliasing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground
var engine;
var world;

var box1;
var box2;
var box3,
  box4
var box5;
var pig1;
var log1;
var log3,
  log4;
var pig2,
  log2
var bird
  var bgImage
    var platform
      var constrainedLog,
        chain;
      function preload() {
        bgImage = loadImage("sprites/bg.png")
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
        bird = new Bird(40, 40)
        platform = new Ground(200, 300, 400, 200)
        constrainedLog = new Log(100, 50, 100, 0)
        chain = new Chain(bird.body, constrainedLog.body)

        // degrees - measure of angle RADIANS 180 = PI radians (PI = 22/7 = 3.14...) 90
        // = PI/2 PI
      }

      function draw() {
        background(bgImage);
        rectMode(CENTER)

        box1.display()
        box2.display()
        box3.display()
        box4.display()
        box5.display()
        ground.display()
        pig1.display()
        pig2.display()
        log1.display()
        log2.display()
        log3.display()
        log4.display()
        bird.display()
        platform.display()
        constrainedLog.display()
        chain.display()

      }
