'use strict';





function onInit() {
    createImgs()
    renderImgs()

}


// RENDER IMGS
function renderImgs() {
    const imgs = getImg()
    const strHtml = imgs.map(function (img) {
        return `
        <div class="img${img.id}">
            <img src="${img.url}" alt="" onclick="onImgClicked(${img.id})" class="images">
        </div>
        `
    })
    const elImg = document.querySelector('.img-container')
    elImg.innerHTML = strHtml.join('')
}


// when img clicked
function onImgClicked(id) {
    document.querySelector('.img-container').style.display = 'none'
    document.querySelector('.canvas-container').style.display = 'block'

    getImgById(id)
    canvasInit(id)

    gMeme.selectedImgId = id
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


function onDownloadImg(elImg){
    const imgContent = gCanvas.toDataURL('image/jpeg');
    elImg.href = imgContent
}




function onChangeStrokeClr(value){
    setStrokeColor(value)
}


function onChangefillClr(value){
    setFillColor(value)
}





function onOpenAbout(){
    const elModal = document.querySelector('.modal')
    elModal.style.display = 'block'

}


function onCloseAbout(){
    const elModal = document.querySelector('.modal')
    elModal.style.display = 'none'
}


function onEasterEggOpen(){
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
}



function onAddedLine(){
    const elImgId = gMeme.selectedImgId

    const newTextLine = {
        pos: {
            x: 80,
            y: 250,
            xEnd: 400,
            yEnd: 40
        },
        txt: 'new line',
        size: 50,
        align: 'center',

    };
    addedLine(newTextLine)
    drawImg(elImgId)

}




function onDeletedLine(){
    if(!gIsMarked) return
    const elImgId = gMeme.selectedImgId
    deletedLine(elImgId)
    drawImg(elImgId)
}
