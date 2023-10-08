const canvas = document.getElementById('test-canvas');
//line below gives us access to canvas API
const ctx = canvas.getContext('2d');

const tileW = 32;
const tileH = 32;

// const gridRows = 43;
// const gridCols = 31;

const gridRows = 10;
const gridCols = 10;

const map = [
    0,1,0,0,0,0,0,0,0,0,
    0,1,1,1,1,0,0,0,0,0,
    0,0,0,0,1,0,0,0,0,0,
    0,0,0,0,1,0,0,0,0,0,
    0,0,0,0,1,0,0,0,0,0,
    0,0,0,0,1,0,0,0,0,0,
    0,0,0,0,1,1,1,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,

]

//continuously renders your screen
const updateAll = () => {
    drawMap();
    window.requestAnimationFrame(updateAll);
}
window.onload = () => {
    window.requestAnimationFrame(updateAll);
}

const drawMap = () => {
    for (let eachRow = 0; eachRow < gridRows; eachRow++){
        for (let eachCol = 0; eachCol < gridCols; eachCol++){
            let arrayIndex = eachRow * gridRows + eachCol;
            if(map[arrayIndex] === 1){
                ctx.fillStyle = "lightgray"
                ctx.fillRect(tileW*eachCol,tileH*eachRow,tileW, tileH)
            }
            else {
                ctx.fillStyle = "black"
                ctx.fillRect(tileW*eachCol,tileH*eachRow,tileW, tileH)
            }
        }
    }
}