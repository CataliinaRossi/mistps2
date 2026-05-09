// TP 2. IPMI 
// Catalina Rossi
// Legajo nro 93513/2
// Comision 4
// Anime elegido: NEEYD GIRL OVERDOSE

PImage img1;
PImage img2;
PImage img3;
PImage img4;
PImage img5;
PImage contname;
PImage contenedortext;
PImage recargar;
PImage iniciar;
PImage fondo;
PFont font;
int pantalla = 0;
int numero = 0;
int segundos = 700;
int posY;
int textoX;
int imgY2;
int imgY3;
int imgY4;
int imgY5;


void setup() {
  size(640, 480);
  fondo = loadImage("data/fondo.png");
  iniciar = loadImage("data/iniciar.png");
  recargar= loadImage("data/recargar.png");
  img1 = loadImage("data/img1.png");
  img2 = loadImage("data/img2.png");
  img3 = loadImage("data/img3.png");
  img4 = loadImage("data/img4.png");
  img5= loadImage("data/img5.png");
  contname= loadImage("data/contname.png");
  contenedortext= loadImage("data/contenedortext.png");
  font = createFont("data/VCR_OSD_MONO_1.001.ttf", 20);
  textFont(font);
  textSize(20);
}

void draw() {

  if (pantalla == 0) {
    // ── INICIO ──────────────────────────────────────────────
    image(fondo, 0, 0, 640, 480);
    image(img1, 150, 100, 364, 243);
    image(contname, 425, 45, 150, 90);
    image(contname, 100, 200, 142, 80);
    image(iniciar, 320, 250, 270, 140);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(15);
    text("Catalina Rossi", 172, 250);
    text("Comision 4", 495, 97);

  } else if (pantalla == 1) {
    image(fondo, 0, 0, 640, 480);
    if (imgY2 > 60) {
      imgY2 = imgY2 - 3;
    }
    image(img2, 5, imgY2, 301, 350);
    image(contenedortext, 315, 60, 320, 384);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(13);
    text("Needy Girl Overdose es la \n adaptación al anime \n del videojuego \n Needy Girl Overdose, también \n conocido como \n Needy Streamer Overload. \n Actualmente está en emisión \n desde abril de 2026. \n La historia sigue a Ame, \n una chica con una fuerte \n necesidad de validación que \n intenta convertirse en \n una streamer famosa. \n Entre likes, seguidores \n y transmisiones, la serie explora \n la presión de internet, \n la identidad digital, la ansiedad y \n la dependencia de \n la aprobación ajena.", 477, 250);
    numero = numero + 2;
    if (numero >= segundos) {
      pantalla = 2;
      numero = 0;
      posY = 430;
    }

  } else if (pantalla == 2) {
    image(fondo, 0, 0, 640, 480);
    if (imgY3 < 60) {
      imgY3 = imgY3 + 3;
    }
    image(img3, 25, imgY3, 218, 389);
    image(contenedortext, 315, 60, 320, 384);
    fill(0);
    textAlign(LEFT, TOP);
    textSize(13);
    text("Ame-chan es la identidad \n cotidiana de KAngel \n fuera del mundo \n del streaming. \n En su vida diaria \n se muestra más \n reservada y sensible,\n y contrasta con \n la imagen brillante \n que proyecta como KAngel.", 325, posY);
    if (posY > 75) {
      posY = posY - 1;
    }
    numero = numero + 2;
    if (numero >= segundos) {
      pantalla = 3;
      numero = 0;
    }

  } else if (pantalla == 3) {
    image(fondo, 0, 0, 640, 480);
    if (imgY4 < 60) {
      imgY4 = imgY4 + 3;
    }
    image(img4, 20, imgY4, 267, 377);
    image(contenedortext, 315, 60, 320, 384);
    fill(0);
    textAlign(CENTER, TOP);
    textSize(15);
    text("KAngel es la identidad virtual \n que Ame construye \n para internet. \n Como streamer, proyecta \n una imagen carismática, \n brillante y cercana, pensada \n para conectar con su \n audiencia.", 476, 120);
    numero = numero + 2;
    if (numero >= segundos) {
      pantalla = 4;
      numero = 0;
      textoX = 700;
    }

  } else if (pantalla == 4) {
    image(fondo, 0, 0, 640, 480);
    if (imgY5 > 60) {
      imgY5 = imgY5 - 3;
    }
    image(img5, 20, imgY5, 267, 377);
    image(contenedortext, 315, 60, 320, 384);
    fill(0);
    textAlign(LEFT, TOP);
    textSize(15);
    text("Purple Lollipop es una streamer \n que aparece como rival \n de KAngel en el anime. \n Como lider de Karamazov, busca \n ganar popularidad y representa \n otra forma de construir \n identidad y presencia \n dentro de internet.", textoX, 104);
    if (textoX > 325) {
      textoX = textoX - 2;
    }
    numero = numero + 2;
    if (numero >= segundos) {
      pantalla = 5;
      numero = 0;
    }

  } else if (pantalla == 5) {
    image(fondo, 0, 0, 640, 480);
    image(recargar, 100, 150, 508, 200);
  }
}

void mousePressed() {
  if (pantalla == 0 &&
      mouseX > 409 && mouseX < 486 &&
      mouseY > 321 && mouseY < 346) {
    pantalla = 1;
    numero = 0;
    posY   = 430;
    textoX = 700;
    imgY2  = 480;
    imgY3  = -389;
    imgY4  = -377;
    imgY5  = 480;
  }
  if (pantalla == 5 &&
      mouseX > 292 && mouseX < 404 &&
      mouseY > 265 && mouseY < 288) {
    pantalla = 0;
    numero = 0;
    posY   = 430;
    textoX = 700;
    imgY2  = 480;
    imgY3  = -389;
    imgY4  = -377;
    imgY5  = 480;
  }
}
