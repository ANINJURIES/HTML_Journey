
var  canvas = document.querySelector('canvas');
canvas.style.border = " 5px solid red"

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d'); // to get all context for drawing and 2d as paramters so 2d draing kind of..


// line , see mdn refrece for all these, how does it work ?
c.beginPath();                         
c.moveTo(500,300)             
c.lineTo(10,10);              
c.stroke();                  // gives stokes to line so it becomes visible
c.strokeStyle = "blue"      // giving color to the stroke 

// you can give multiple lineTo() statment to create shapes 


c.beginPath();     // by specifing beginPath() before line or arc says, do not combine next lines/arc with above line/arc create new path/line/arc                    
