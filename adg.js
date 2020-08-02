// Formas posibles (las que están entre comillas)
let formas = {
  'flor' : [1,-3],
  'tricota' : [1,-2],
  'masdelomismo' : [2,-3],
  '3' : [2,-1],
  'aburrido' : [1,1],
  'culo' : [1,3],
  'rapido' : [1,5],
  'porno' : [2,5],
};

// Forma visualizada:
// (poner entre corteches y comillas, como así:)

let forma = formas['flor'];










let formas_posibles = Object.keys(formas);

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


  translate(width/2,height/2);

  background(220);
  circle(0, 0, 30);
}


let a = 0;
let r = 15;
let cual_forma = 0;


function draw() {
  translate(width/2,height/2);
  //clear();
  //background(220);

  a += PI/72;  // a de angulo

  if(a % PI*4 == 0){
    cual_forma = round(a / (PI*4));
    forma = formas[formas_posibles[cual_forma % formas_posibles.lenght]];
  }

  codo = p5.Vector.fromAngle(a * forma[0], l_brazo);
  line(0, 0, codo.x, codo.y);

  antebrazo = p5.Vector.fromAngle(a * forma[1], l_antebrazo);
  munie = codo.add(antebrazo);



  circle(codo.x,  codo.y,  r);
  circle(munie.x, munie.y, r);

}
