'use strict';


function canvasInit(id) {
    gCanvas = document.querySelector('.my-canvas')
    gCtx = gCanvas.getContext('2d')

    drawImg(id)
    
}



// WHEN LINE CLICKED
function onCanvasClick(ev) {
    const { offsetX, offsetY } = ev;
    const clickedLine = gMeme.lines.findIndex(line => {
        return offsetX >= line.pos.x && offsetX <= line.pos.x + line.pos.xEnd
            && offsetY <= line.pos.y && offsetY >= line.pos.y - line.pos.yEnd
    })


    gMeme.selectedLineIdx = clickedLine
    getSelectedLineIdx(gMeme.selectedLineIdx)
    markLine()

}


// MARK LINE
function markLine() {
    const line = gMeme.selectedLineIdx
    const elImgId = gMeme.selectedImgId

    if (line === -1 || gIsMarked) {
        // if its on -1 or already marked
        gIsMarked = false
        drawImg(elImgId)
        return
        // remove mark
    }
    const position = gMeme.lines[line].pos
    const size = getFontSize()


    gCtx.beginPath();
    gCtx.rect(position.x - (size/2) , position.y -(size*0.9) , position.xEnd  , size )
    gCtx.strokeStyle = 'red'
    gCtx.stroke()
    gIsMarked = true
    
}



function getSelectedLineIdx(idx){
    return idx;
}





function getFontSize() {
    var idx = gMeme.selectedLineIdx
    return gMeme.lines[idx].size
}