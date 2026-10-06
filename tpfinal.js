const Pinicio = -1;
const Pcreditos = -2;

let pantalla = Pinicio;

let textos = [
  "Mientras trabaja en las cloacas, Mario encuentra un viejo mapa que habla de una verdad oculta del Reino Champiñón.",
  "Mario decide si seguir el mapa o ignorarlo y seguir con su trabajo.",
  "Mario se olvida del asunto y pasa el día arreglando cañerías con total normalidad.",
  "Horas más tarde, una explosión sacude la superficie del Reino Champiñón.",
  "Bowser había intentado infiltrarse solo en el palacio para exponer secretos de la Princesa Peach. Sin embargo, al actuar sin ayuda, las defensas mágicas de la princesa lo superaron por completo.",
  "Mario se cruza con un grupo de Goombas que, en lugar de atacar, huyen asustados de la guardia real.",
  "Los Goombas revelan que la Princesa Peach no es tan inocente y usa magia oscura para controlar el reino.",
  "Para comprobarlo, los Goombas le entregan a Mario un traje de infiltración especial.",
  "Mario sigue avanzando guiándose únicamente por el mapa básico.",
  "Mario logra llegar al palacio flotante por sus propios medios, pero al no tener herramientas se ve obligado a trepar por los muros.",
  "Al intentar entrar por una ventana alta sin estar preparado, es detectado de inmediato por las trampas mágicas del palacio.",
  "La guardia lo rodea y es capturado sin llegar siquiera a ver a Bowser ni descubrir las pruebas de la tiranía.",
  "Mario llega a los portones del palacio flotante de Peach.",
  "Mario irrumpe a la fuerza, rompiendo los portones y causando un gran revuelo en el patio.",
  "Mario entra sigilosamente por los conductos y llega directo al laboratorio secreto de la princesa.",
  "Allí descubre la verdad: Peach planea transformar a todos los habitantes en bloques de ladrillo inanimados para gobernar sola.",
  "Bowser irrumpe en el laboratorio para detener a la princesa, pero confunde a Mario con un cómplice de ella.",
  "Mario le muestra las pruebas a Bowser y entienden que tienen el mismo objetivo: deciden unir fuerzas.",
  "Mario y Bowser exponen los planes de Peach frente a todo el reino. La princesa es derrocada pacíficamente.",
  "El combate es tan ruidoso y destructivo que alerta a la Princesa Peach.",
  "Mario y Bowser quedan encerrados en la celda del palacio."
];

let textosA = [
  "Continuar",
  "Ignorarlo",
  "Continuar",
  "Continuar",
  "",
  "Ayudarlos",
  "Continuar",
  "Continuar",
  "Continuar",
  "Continuar",
  "Continuar",
  "",
  "Entrar por la puerta",
  "Continuar",
  "Continuar",
  "Continuar",
  "Explicarle la verdad",
  "Continuar",
  "",
  "Continuar",
  ""
];

let textosB = [
  "",
  "Seguir el mapa",
  "",
  "",
  "",
  "Ignorarlos",
  "",
  "",
  "",
  "",
  "",
  "",
  "Colarse por los conductos",
  "",
  "",
  "",
  "Pelear contra él",
  "",
  "",
  "",
  ""
];

let siguienteA = [
  1,
  2,
  3,
  4,
  -1,
  6,
  7,
  12,
  9,
  10,
  11,
  -1,
  13,
  16,
  15,
  16,
  17,
  18,
  -1,
  20,
  -1
];

let siguienteB = [
  -1,
  5,
  -1,
  -1,
  -1,
  8,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  14,
  -1,
  -1,
  -1,
  19,
  -1,
  -1,
  -1,
  -1
];

let decisiones = 0;

let scroll;

// BOTONES
let botonA = {
  x: 60,
  y: 370,
  ancho: 320,
  alto: 55
};

let botonB = {
  x: 420,
  y: 370,
  ancho: 320,
  alto: 55
};

let botonCentral = {
  x: 250,
  y: 370,
  ancho: 300,
  alto: 55
};

let botonInicio = {
  x: 220,
  y: 220,
  ancho: 200,
  alto: 50
};

let botonCreditos = {
  x: 220,
  y: 290,
  ancho: 200,
  alto: 50
};


function setup() {

  createCanvas(800, 450);

  textAlign(CENTER, CENTER);
  textSize(16);

  scroll = height;
}


function draw() {

  background(30);

  if (pantalla == Pinicio) {

    dibInicio();

  } else if (pantalla == Pcreditos) {

    dibujarCreditos();

  } else {

    dibHistoria();
  }
}


// PANTALLA DE INICIO

function dibInicio() {

  fill(255);

  textSize(28);

  text("SUPER MARIO BROS", width / 2, 120);

  text("la verdad oculta", width / 2, 155);

  dibBoton(botonInicio, "COMENZAR");

  dibBoton(botonCreditos, "CRÉDITOS");
}


// PANTALLA DE CRÉDITOS

function dibujarCreditos() {

  fill(255);

  textSize(20);

  text("PMIW - Comisión 4", width / 2, scroll);

  text("Docente: Leonardo Garay", width / 2, scroll + 40);

  text(
    "Integrantes: Julieta Ramos, Catalina Rossi",
    width / 2,
    scroll + 80
  );

  text(
    "Historia original: Super Mario Bros (Nintendo, 1985)",
    width / 2,
    scroll + 120
  );

  scroll = scroll - 1;

  if (scroll < -120) {

    scroll = height;
  }

  dibBoton(botonCentral, "VOLVER");
}


// HISTORIA

function dibHistoria() {

  let nodo = pantalla;

  fill(80);

  noStroke();

  rect(0, 0, width, height);

  fill(255);

  textSize(18);

  text(
    obtener(textos, nodo),
    50,
    50,
    width - 100,
    150
  );


  // Si hay dos opciones

  if (
    siguienteA[nodo] != -1 &&
    siguienteB[nodo] != -1
  ) {

    dibBoton(
      botonA,
      obtener(textosA, nodo)
    );

    dibBoton(
      botonB,
      obtener(textosB, nodo)
    );


  // Si solamente hay una opción

  } else if (siguienteA[nodo] != -1) {

    dibBoton(
      botonCentral,
      obtener(textosA, nodo)
    );


  // Si es un final

  } else {

    dibBoton(
      botonCentral,
      "VOLVER A JUGAR"
    );
  }
}


// OBTENER TEXTO

function obtener(arreglo, indice) {

  return arreglo[indice];
}


// DIBUJAR BOTONES

function dibBoton(boton, textoBoton) {

  if (
    clicSobre(
      boton.x,
      boton.y,
      boton.ancho,
      boton.alto
    )
  ) {

     fill(247,137,247);

  } else {

    fill(247,137,247);
  }

  stroke(255);

  rect(
    boton.x,
    boton.y,
    boton.ancho,
    boton.alto,
    8
  );

  fill(255);

  noStroke();

  textSize(14);

  text(
    textoBoton,
    boton.x + boton.ancho / 2,
    boton.y + boton.alto / 2
  );
}


// CLICK DEL MOUSE

function mousePressed() {


  // INICIO

  if (pantalla == Pinicio) {

    if (
      clicSobre(
        botonInicio.x,
        botonInicio.y,
        botonInicio.ancho,
        botonInicio.alto
      )
    ) {

      pantalla = 0;

      decisiones = 0;


    } else if (
      clicSobre(
        botonCreditos.x,
        botonCreditos.y,
        botonCreditos.ancho,
        botonCreditos.alto
      )
    ) {

      pantalla = Pcreditos;

      scroll = height;
    }


  // CRÉDITOS

  } else if (pantalla == Pcreditos) {

    if (
      clicSobre(
        botonCentral.x,
        botonCentral.y,
        botonCentral.ancho,
        botonCentral.alto
      )
    ) {

      pantalla = Pinicio;
    }


  // HISTORIA

  } else {

    let nodo = pantalla;


    // DOS OPCIONES

    if (
      siguienteA[nodo] != -1 &&
      siguienteB[nodo] != -1
    ) {

      if (
        clicSobre(
          botonA.x,
          botonA.y,
          botonA.ancho,
          botonA.alto
        )
      ) {

        decisiones++;

        pantalla = siguienteA[nodo];


      } else if (
        clicSobre(
          botonB.x,
          botonB.y,
          botonB.ancho,
          botonB.alto
        )
      ) {

        decisiones++;

        pantalla = siguienteB[nodo];
      }


    // UNA OPCIÓN

    } else if (siguienteA[nodo] != -1) {

      if (
        clicSobre(
          botonCentral.x,
          botonCentral.y,
          botonCentral.ancho,
          botonCentral.alto
        )
      ) {

        decisiones++;

        pantalla = siguienteA[nodo];
      }


    // FINAL

    } else {

      if (
        clicSobre(
          botonCentral.x,
          botonCentral.y,
          botonCentral.ancho,
          botonCentral.alto
        )
      ) {

        pantalla = Pinicio;
      }
    }
  }
}


// DETECTAR SI SE HIZO CLICK SOBRE UN BOTÓN

function clicSobre(x, y, ancho, alto) {

  if (
    mouseX >= x &&
    mouseX <= x + ancho &&
    mouseY >= y &&
    mouseY <= y + alto
  ) {

    return true;

  } else {

    return false;
  }
}
