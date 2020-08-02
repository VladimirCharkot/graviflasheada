// Esto va a servir más adelante
// p5.Vector


// medidas
let w = 400;
let h = 400;

let l_brazo = w/7;
let l_antebrazo = w/9;
let l_clava = w/8;

function setup() {
  createCanvas(w, h);
  cx = width/2;
  cy = height/2;
  c = createVector(cx, cy);

  translate(width/2,height/2);

  background(220);
  circle(0, 0, 30);
}


var a = 0;

function draw() {
  translate(width/2,height/2);
  clear();
  background(220);

  a += 0.05;  // a de angulo

  codo_izq = p5.Vector(-l_brazo, -l_brazo);
  munie_izq = codo_izq + p5.Vector();



  circle(-l_brazo * sin(a), -l_brazo * cos(a), 30);

  //line(cx,cy, );
}
