let picture = [
    'bretagne01.png',
    'bretagne02.png',
    'bretagne03.png',
    'bretagne04.png'
]

let Carousel = function (frameTarget, imgTable, frameWidth, unit){
    let container = document.getElementById(frameTarget);

    // create slides frame
    let frame = document.createElement('div');
    frame.style.width = frameWidth + unit;
    frame.style.position = 'relative';
    frame.style.margin = 'auto';
    frame.style.overflow = 'hidden';

    container.appendChild(frame);

    let slide = document.createElement('img');
    slide.style.width = frameWidth + unit;
    slide.src = imgTable[0];
    slide.style.position = 'relative';

    frame.appendChild(slide);

    // controls
    let controls = document.createElement('div');
    controls.style.width = '100%';
    controls.style.height = '100%';
    controls.style.textAlign = 'center';
    controls.style.color = 'lightgrey';
    controls.style.fontWeight = 'bold';
    controls.style.position = 'absolute';
    controls.style.top = '0';
    controls.style.display = 'flex';
    controls.style.justifyContent = 'space-between';
    controls.style.alignItems = 'center';
    frame.appendChild(controls);

    let goLeft = document.createElement('div');
    goLeft.style.width = '10%';
    goLeft.innerHTML = '<';
    goLeft.style.fontSize = '5vw';
    controls.appendChild(goLeft);

    let goRight = document.createElement('div');
    goRight.style.width = '10%';
    goRight.innerHTML = '>';
    goRight.style.fontSize = '5vw';
    controls.appendChild(goRight);

    // create a square div for each slide in idx
    let square = document.createElement('div');
    square.style.width = '100%';
    square.style.position = 'absolute';
    square.style.bottom = '0';
    square.style.display = 'flex';
    square.style.justifyContent = 'center';
    square.style.alignSelf = 'flex-end';
    for(let img of imgTable){
        let idx = document.createElement('div');
        idx.style.width = '2%';
        idx.style.height = '1vh';
        idx.style.margin = '1vw';
        idx.style.backgroundColor = 'lightgrey';
        square.appendChild(idx);
    }
    frame.appendChild(square);

    // todo mouseover and click

    let timer = setInterval(scroll, 2000);

    function scroll (){
        let ref = 0;
        let scrollTimer = setInterval(function (){
            if (ref < frameWidth){
                slide.style.left = ref + unit;
                ref++;
            }
            else {
                clearInterval(scrollTimer);
                slide.style.left = '0';
                zap();
            }
        }, 10)
    }

    let i =0;
    function zap (){

        if (i < imgTable.length-1){
            slide.src = imgTable[i];
            i++;
        }
        else {
            slide.src = imgTable[picture.length-1];
            i = 0;
        }
    }

}

let newCar = new Carousel('slide', picture, 80, 'em');
