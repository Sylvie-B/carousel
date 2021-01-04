let picture = [
    'bretagne01.png',
    'bretagne02.png',
    'bretagne03.png',
    'bretagne04.png'
]

let frame = document.createElement('img');
frame.style.width = window.innerWidth / 2 + 'px';
frame.style.border = '1px solid black';
// frame.src = picture[0];

let slide = document.getElementById('slide');
slide.style.width = window.innerWidth / 2 + 'px';
slide.style.margin = 'auto';
slide.style.overflow = 'hidden';


slide.appendChild(frame);

let i =0;

setInterval(function (){
    if (i < picture.length){
        frame.src = picture[i];
        i++;
    }
    else {
        i = 0;
    }
}, 1000);
