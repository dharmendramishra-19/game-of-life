// Import stylesheets
import './style.css';

// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const canvasId = "app";

const app = document.getElementById(canvasId) as HTMLCanvasElement;

if(app === null){
  throw new Error(`Could not find canvas ${canvasId}`)
}

type Current_cell = "dead" | "alive";

let nbors_count = 8;