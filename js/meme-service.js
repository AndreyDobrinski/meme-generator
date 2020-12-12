'use strict';


// var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs;
var gCanvas;
var gCtx;
var gIsMarked = false
var gStrokeColor = 'black'
var gFillColor = 'white'


var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            pos: {
                x: 80,
                y: 60,
                xEnd: 420,
                yEnd: 40
            },
            txt: 'I never eat Falafel',
            size: 50,
            align: 'center',
        },
        {
            pos: {
                x: 150,
                y: 460,
                xEnd: 270,
                yEnd: 40

            },
            txt: 'I will NOW',
            size: 50,
            align: 'center',
        },
    ]
}


function createImgs() {
    gImgs = [
        { id: 1 , url: 'img/1.jpg', keywords: ['happy'] },
        { id: 2 , url: 'img/2.jpg', keywords: ['happy'] },
        { id: 3 , url: 'img/3.jpg', keywords: ['happy'] },
        { id: 4 , url: 'img/4.jpg', keywords: ['happy'] },
        { id: 5 , url: 'img/5.jpg', keywords: ['happy'] },
        { id: 6 , url: 'img/6.jpg', keywords: ['happy'] },
        { id: 7 , url: 'img/7.jpg', keywords: ['happy'] },
        { id: 8 , url: 'img/8.jpg', keywords: ['happy'] },
        { id: 9 , url: 'img/9.jpg', keywords: ['happy'] },
        { id: 10 , url: 'img/10.jpg', keywords: ['happy'] },
        { id: 11 , url: 'img/11.jpg', keywords: ['happy'] },
        { id: 12 , url: 'img/12.jpg', keywords: ['happy'] },
        { id: 13 , url: 'img/13.jpg', keywords: ['happy'] },
        { id: 14 , url: 'img/14.jpg', keywords: ['happy'] },
        { id: 15 , url: 'img/15.jpg', keywords: ['happy'] }
    ]
}


function getImg() {
    return gImgs
}


function getImgById(imgId) {
    var img = gImgs.find(function (img) {
        return imgId === img.id
    })
    return img
}



function drawImg(id) {
    var selectedImg = getImgById(id)
    var img = new Image()
    img.src = selectedImg.url

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        drawTexts()
        markLine()

    }

}


// GO EACH LINE
var drawTexts = function () {
    gMeme.lines.forEach(function (line) {
        drawText(line)
    })
}


function drawText(line) {
    gCtx.beginPath()

    gCtx.lineWidth = '1.5'
    gCtx.strokeStyle = gStrokeColor
    gCtx.fillStyle = gFillColor
    gCtx.font = `normal 900 ${line.size}px Impact`


    gCtx.fillText(line.txt, line.pos.x, line.pos.y)
    gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
}





// // CHANGE TEXT
function textInput(value) {
    if(!gIsMarked) return
    var elImgId = gMeme.selectedImgId
    var elCurrIdx = gMeme.selectedLineIdx
    var selectedLine  = getSelectedLineIdx(elCurrIdx)


    gMeme.lines[selectedLine].txt = value
    
    
    drawImg(elImgId)

}


// CHANGE TEXT SIZE
function fontChange(value) {
    if(!gIsMarked) return

    var elImgId = gMeme.selectedImgId
    var elCurrIdx = gMeme.selectedLineIdx
    var selectedLine  = getSelectedLineIdx(elCurrIdx)

    gMeme.lines[selectedLine].size += value
    drawImg(elImgId)
}


// CHANGE WIDTH
function placeChangeX(value) {
    if(!gIsMarked) return

    var elImgId = gMeme.selectedImgId
    var elCurrIdx = gMeme.selectedLineIdx
    var selectedLine  = getSelectedLineIdx(elCurrIdx)


    gMeme.lines[selectedLine].pos.x += value

    drawImg(elImgId)

}

// CHANGE HEIGHT
function placeChangeY(value) {
    if(!gIsMarked) return

    var elImgId = gMeme.selectedImgId
    var elCurrIdx = gMeme.selectedLineIdx
    var selectedLine  = getSelectedLineIdx(elCurrIdx)


    gMeme.lines[selectedLine].pos.y += value

    drawImg(elImgId)
}


function addedLine(newTextLine){
    gMeme.lines.push(newTextLine)
    setCurrLineIdx(gMeme.lines.length-1)
}


function setCurrLineIdx(idx) {
    gMeme.selectedLineIdx = idx
}

function deletedLine(){
    gMeme.lines.splice(gMeme.selectedLineIdx,1)[0]
    setCurrLineIdx(-1)
    
}



function setStrokeColor(color) {
    var elImgId = gMeme.selectedImgId
    gStrokeColor = color
    drawImg(elImgId)

}

function setFillColor(color) {
    var elImgId = gMeme.selectedImgId
    gFillColor = color
    drawImg(elImgId)

}
