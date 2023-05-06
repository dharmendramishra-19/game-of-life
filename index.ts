// Import stylesheets
import './style.css';

// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const canvasId = "app";
const BOARD_COLS = 40
const BOARD_ROWS = BOARD_COLS;

const app = document.getElementById(canvasId) as HTMLCanvasElement;


if(app === null)
  throw new Error(`Could not find canvas ${canvasId}`)  


app.addEventListener("click", (e) =>{
  const col = Math.floor(e.offsetX/CELL_WIDTH);
  const row = Math.floor(e.offsetY/CELL_HEIGHT);
  
})

app.width = 800;
app.height = 800;

const ctx = app.getContext("2d");

ctx.fillStyle = "#212121";
ctx.fillRect(0,0,app.width, app.height);
const CELL_WIDTH = app.width / BOARD_COLS;
const CELL_HEIGHT = app.height / BOARD_ROWS;

ctx.fillStyle = "red";
for(let i=0; i<BOARD_COLS; i++){
  const x = CELL_WIDTH * i;
  const y = CELL_HEIGHT * i;
  ctx.fillRect(x,y,CELL_WIDTH, CELL_HEIGHT);
}









type Current_cell = "dead" | "alive";

let nbors_count = 8;