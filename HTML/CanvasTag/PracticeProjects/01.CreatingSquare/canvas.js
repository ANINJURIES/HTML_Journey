
var canvas = document.querySelector('canvas')
canvas.style.border = "5px solid red"

canvas.width= window.innerWidth;
canvas.height = window.innerHeight;

// return drawing context of canvas with wd parameter, see info.text for more 
var c = canvas.getContext('2d');

// c.fillRect(x postion,y position,width,height) draw reactangle 
c.fillRect(0,0,200,200)



// giving color to reactangle, reactangle will take style form above-closest fillstyle

c.fillStyle= "grey";
c.fillRect(100,300,200,200)

c.fillStyle= "#faff0a ";
c.fillRect(200,700,200,200)

c.fillStyle= "rgb(0,0,255)";
c.fillRect(800,200,200,200)

c.fillStyle= "rgba(0,255,0,0.5)";
c.fillRect(600,700,200,200)
