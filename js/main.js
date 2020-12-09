'use strict';


// var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs;
var gCanvas;
var gCtx;
var gIsMarked = false


var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            pos: {
                x: 150,
                y: 60,
                xEnd: 230
            },
            txt: 'I never eat Falafel',
            size: 30,
            align: 'center',
            strokeColor: 'green',
            fillColor: 'white'
        },
        {
            pos: {
                x: 150,
                y: 460,
                xEnd: 230
            },
            txt: 'I will NOW',
            size: 30,
            align: 'center',
            strokeColor: 'green',
            fillColor: 'white'
        },
    ]
}








// console.log(gMeme.lines[0].size);


function init() {
    createImgs()
    renderImgs()

}


function canvasInit(id) {
    gCanvas = document.querySelector('.my-canvas')
    gCtx = gCanvas.getContext('2d')


    drawImg(id)
}





function createImgs() {
    gImgs = [
        { id: 1, url: 'img/1.jpg', keywords: ['happy'] },
        { id: 2, url: 'img/2.jpg', keywords: ['happy'] },
        { id: 3, url: 'img/3.jpg', keywords: ['happy'] },
        { id: 4, url: 'img/4.jpg', keywords: ['happy'] },
        { id: 5, url: 'img/5.jpg', keywords: ['happy'] },
        { id: 6, url: 'img/6.jpg', keywords: ['happy'] },
        { id: 7, url: 'img/7.jpg', keywords: ['happy'] },
        { id: 8, url: 'img/8.jpg', keywords: ['happy'] },
        { id: 9, url: 'img/9.jpg', keywords: ['happy'] },
        { id: 10, url: 'img/10.jpg', keywords: ['happy'] }
    ]
}


function getImg() {
    return gImgs
}









// RENDER IMGS
function renderImgs() {
    var imgs = getImg()
    var strHtml = imgs.map(function (img) {
        return `
        <img src="${img.url}" alt="" onclick="onImgClicked(${img.id})">
        `
    })
    var elImg = document.querySelector('.img-container')
    elImg.innerHTML = strHtml
}


// when img clicked
function onImgClicked(id) {

    document.querySelector('.img-container').style.display = 'none'
    // document.querySelector('.selected-img-container').style.display = 'block'
    document.querySelector('.canvas-container').style.display = 'block'

    getImgById(id)
    canvasInit(id)

    gMeme.selectedImgId = id
    // console.log(gMeme.selectedImgId);

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

    gCtx.strokeStyle = line.strokeColor
    gCtx.fillStyle = line.fillColor
    // gCtx.font = 'italic 900 60px serif'
    gCtx.font = `italic 900 ${line.size}px serif`
    // gCtx.textAlign = 'center'


    gCtx.fillText(line.txt, line.pos.x, line.pos.y)
    gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
}










function onTextInput(input) {
    return textInput(input)
}

function onFontChange(value) {
    return fontChange(value)
}

function onPlaceChangeX(value) {
    return placeChangeX(value)
}

function onPlaceChangeY(value) {
    return placeChangeY(value)
}


// CHANGE TEXT
function textInput(value) {
    // console.log(gMeme.selectedImgId);
    var elImgId = gMeme.selectedImgId
    gMeme.lines[0].txt = value
    drawImg(elImgId)

}

// CHANGE TEXT SIZE
function fontChange(value) {
    var elImgId = gMeme.selectedImgId
    gMeme.lines[0].size += value
    drawImg(elImgId)
}



// CHANGE WIDTH
function placeChangeX(value) {
    var elImgId = gMeme.selectedImgId
    gMeme.lines[0].pos.x += value
    drawImg(elImgId)

}

// CHANGE HEIGHT
function placeChangeY(value) {
    var elImgId = gMeme.selectedImgId
    gMeme.lines[0].pos.y += value
    drawImg(elImgId)
}




// WHEN LINE CLICKED
function onCanvasClick(ev) {

    var { offsetX, offsetY } = ev;
    // console.log(offsetX);
    var clickedLine = gMeme.lines.findIndex(line => {
        return offsetX >= line.pos.x && offsetX <= line.pos.x + line.pos.xEnd
            && offsetY <= line.pos.y && offsetY >= line.pos.y - line.size

    })


    // console.log(clickedLine)
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
    gCtx.rect(position.x, position.y + 10, position.xEnd, -40)
    gCtx.stroke()
    gIsMarked = true
}





/// STOPED HERE //////
function getSelectedLineIdx(idx){
    return idx;
}

