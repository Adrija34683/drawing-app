const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#fffbe6';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let isDrawing = false;
let isEraser = false;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

document.getElementById('toggleEraser').addEventListener('click', () => {
    isEraser = !isEraser;
    if (isEraser) {
        ctx.strokeStyle = '#fffbe6';
        ctx.lineWidth = 15;
        document.getElementById('toggleEraser').innerText = 'Pen Mode';
    } else {
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
        document.getElementById('toggleEraser').innerText = 'Eraser Mode';
    }
});

document.getElementById('clearCanvas').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fffbe6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});
