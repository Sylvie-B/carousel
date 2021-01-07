let picture = [
    'bretagne01.png',
    'bretagne02.png',
    'bretagne03.png',
    'bretagne04.png'
]

let Carousel = function (frameTarget, imgTable, frameWidth){
    // create image frame
    let frame = document.createElement('img');
    frame.style.width = frameWidth;
    frame.style.border = '1px solid black';
    frame.src = imgTable[0];

    document.getElementById(frameTarget).appendChild(frame);

    let i =0;
    setInterval(function (){
        if (i < imgTable.length-1){
            frame.src = imgTable[i];
            i++;
        }
        else {
            frame.src = imgTable[picture.length-1];
            i = 0;
        }
    }, 1500);
}

let newCar = new Carousel('slide', picture, '50em');
