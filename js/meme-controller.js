'use strict';





function onInit() {
    createImgs()
    renderImgs()

}


// RENDER IMGS
function renderImgs() {
    var imgs = getImg()
    var strHtml = imgs.map(function (img) {
        return `<img src="${img.url}" alt="" onclick="onImgClicked(${img.id})" class="images">`
    })
    var elImg = document.querySelector('.img-container')
    elImg.innerHTML = strHtml.join('')
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
    var imgContent = gCanvas.toDataURL('image/jpeg');
    elImg.href = imgContent
}




function onChangeStrokeClr(value){
    setStrokeColor(value)
}


function onChangefillClr(value){
    setFillColor(value)
}


function setStrokeColor(color) {
    gStrokeColor = color
}

function setFillColor(color) {
    gFillColor = color
}




function onOpenAbout(){
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'block'
}


function onCloseAbout(){
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'none'
}