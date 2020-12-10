'use strict';


function canvasInit(id) {
    gCanvas = document.querySelector('.my-canvas')
    gCtx = gCanvas.getContext('2d')

    drawImg(id)
    
}



// WHEN LINE CLICKED
function onCanvasClick(ev) {

    var { offsetX, offsetY } = ev;
    // console.log(offsetX);
    var clickedLine = gMeme.lines.findIndex(line => {
        return offsetX >= line.pos.x && offsetX <= line.pos.x + line.pos.xEnd
            && offsetY <= line.pos.y && offsetY >= line.pos.y - line.pos.yEnd

    })


    console.log(clickedLine)
    gMeme.selectedLineIdx = clickedLine
    // console.log(gMeme.selectedLineIdx);
    getSelectedLineIdx(gMeme.selectedLineIdx)
    markLine()

}



// MARK LINE
function markLine() {
    var line = gMeme.selectedLineIdx
    var elImgId = gMeme.selectedImgId

    if (line === -1 || gIsMarked) {
        // if its on -1 or already marked
        gIsMarked = false
        drawImg(elImgId)
        return
        // remove mark
    }
    var position = gMeme.lines[line].pos


    gCtx.beginPath();
    gCtx.rect(position.x -10 , position.y +10 , position.xEnd +15  ,( -1 * position.yEnd ) -10)
    gCtx.strokeStyle = 'red'
    gCtx.stroke()
    gIsMarked = true
    
}



function getSelectedLineIdx(idx){
    return idx;
}

