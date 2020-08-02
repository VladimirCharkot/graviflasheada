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
let r = 25;
let cual_forma = 0;
let t = 0;
let limite = 72*4;

function draw() {
  translate(width/2,height/2);
  //background(220);
  t += 1;

  a += PI/72;  // a de angulo


  if(t % limite == 0){
    background(220);
    let cual = floor(t / limite) % formas_posibles.length;
    forma = formas[formas_posibles[cual]];
  }

  codo = p5.Vector.fromAngle(a * forma[0], l_brazo);
  line(0, 0, codo.x, codo.y);

  antebrazo = p5.Vector.fromAngle(a * forma[1], l_antebrazo);
  munie = codo.add(antebrazo);



  circle(codo.x,  codo.y,  r);
  circle(munie.x, munie.y, r);

}
