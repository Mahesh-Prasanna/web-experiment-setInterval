

const boxElm = document.querySelector('#sin');
let x = 0;
let z = 0;
let p = false;
let q = false;

const startY =(innerHeight-boxElm.offsetHeight)/2;

setInterval(() => {
    const y = startY + Math.sin(x/180) * (startY);
    boxElm.style.top = `${y}px`;
    boxElm.style.left = `${z}px`;
    z+= !p ? 1:-1;
    if(z+40>innerWidth){
        p=true;
    }else if(z<=0){
        p=false;
    }
    x+= !q ? 1:-1;
    if(z+40>innerWidth){
        q=true;
    }else if(z<=0){
        q=false;
    }
},1);

const innerCircul = document.querySelector('#inner-circul');
const outerCircul1 = document.querySelector('#outer-circul1');
const outerCircul2 = document.querySelector('#outer-circul2');
innerCircul.style.top = `${(innerHeight-300)/2}px`;
innerCircul.style.left = `${(innerWidth-300)/2}px`;

let xa = 0;
let za = 180;
const outer1Y = (innerHeight-30)/2;
const outer1X = (innerWidth-30)/2;
const outer2Y = (innerHeight-30)/2;
const outer2X = (innerWidth-30)/2;
setInterval(() => {
    const y = outer1Y + Math.sin(xa++/180) * 150;
    outerCircul1.style.top = `${y}px`;
    outerCircul1.style.left = `${(outer1X + Math.cos(xa++/180) * 150 )}px`;

},10);

setInterval(() => {

    const a = outer2Y + Math.sin(za++/180) * 150;
    outerCircul2.style.top = `${a}px`;
    outerCircul2.style.left = `${(outer2X - Math.cos(za++/180) * 150 )}px`;

},1);
