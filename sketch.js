let cols; // Numero di colonne della griglia
let rows; // Numero di righe della griglia
let cellSize; // Dimensione delle celle
let margin = 50; // Margine tra la griglia e i bordi dello schermo
let cellSpacing = 30; // Spazio tra le celle

function setup() {
  createCanvas(windowWidth, windowHeight);
  calculateGrid(); 
  noLoop(); }
  
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculateGrid(); //  Ricalcolo il numero di colonne, righe e dimensione delle celle
  redraw(); }

function draw() {
  background(200); 
  
  // Calcolo x e y per centrare la griglia 
  let startX = margin + (width - 2 * margin - (cols * (cellSize + cellSpacing) - cellSpacing)) / 2; 
  let startY = margin + (height - 2 * margin - (rows * (cellSize + cellSpacing) - cellSpacing)) / 2; 
  //loop colonne
  for (let i = 0; i < cols; i++) {
  //loop righe 
    for (let j = 0; j < rows; j++) {
      let xBase = startX + (cellSize + cellSpacing) * i; //  X della cella
      let yBase = startY + (cellSize + cellSpacing) * j; //  Y della cella
      
      // 10 puntini neri che si muovono casualmente
      for (let k = 0; k < 10; k++) {
        let pointX = xBase + random(0, cellSize); // X casuale 
        let pointY = yBase + random(0, cellSize); // Y casuale
        circle(pointX, pointY,5,5); 
        fill(0);
      }
      
      // 5 cerchi 
      for (let k = 0; k < 5; k++) {
        let circleSize = random(10, 25); // Dimensione  del cerchio (min 20 e  masx 50)
        let x = xBase + random(circleSize, cellSize - circleSize); //  X casuale 
        let y = yBase + random(circleSize, cellSize - circleSize); // Y casuale 
        
        // giallo casuale
        let yellowShade = random(200, 300); //  giallo  casuale
        fill(yellowShade, yellowShade * 0.9, 0); //  variabile
        stroke(0); 
        
        
        strokeWeight(2); 
        circle(x, y, circleSize); 
      }
      
      // linea bianca con inclinazione casuale
      stroke(255); 
      strokeWeight(2); 
      
      let angle = random(TWO_PI); // Angolo casuale 
      let lineLength = cellSize * 0.8; // Lunghezza della linea (80% cella)
      let x1 = xBase + cellSize / 2 - cos(angle) * lineLength / 2; // inizio della linea x
      let y1 = yBase + cellSize / 2 - sin(angle) * lineLength / 2;// inizio Y
      let x2 = xBase + cellSize / 2 + cos(angle) * lineLength / 2; // fine della linea
      let y2 = yBase + cellSize / 2 + sin(angle) * lineLength / 2;// fine y
      line(x1, y1, x2, y2); // Disegna la linea

      // quadrato
      noStroke(); 
      fill(0); 
      let squareSize = random(10, 40); // Dimensione casuale (min 20, max 50)
      let squareX = xBase + random(0, cellSize - squareSize); //  X casuale
      let squareY = yBase + random(0, cellSize - squareSize); //  Y casuale 
      rect(squareX, squareY, squareSize, squareSize); 
    }
  }
}

// " Funzione per calcolare il numero di colonne, righe e dimensione delle celle in base alle dimensioni della finestra"

function calculateGrid() {
  cols = floor((width - 2 * margin) / (80 + cellSpacing)); // n di colonne basato sulla larghezza disponibile
  rows = floor((height - 2 * margin) / (80 + cellSpacing)); // n di righe basato sulla larghezza disponibile
  cellSize = min((width - 2 * margin - (cols - 1) * cellSpacing) / cols, (height - 2 * margin - (rows - 1) * cellSpacing) / rows); // Dimensione max delle celle
}
