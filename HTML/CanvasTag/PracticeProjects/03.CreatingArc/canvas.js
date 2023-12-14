
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


// to tell create new path/shape/arc/line from here
c.beginPath();

// create arc. here we are creating circle 
c.arc(300, 300, 30, 0, Math.PI * 2, false);

// giving color to stoke 
c.strokeStyle = 'blue';

// giving stoke to created arc outline.
c.stroke();


//you can create multiple circles by using for loop

for (var i = 0; i < 50; i++) {

    // math.rando() retruns value from 0-1 so we are mul with height and widht to cover whole window withc circle
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    // see by commenting below how we are getting unwanted continus circle drawing not diffrent 
    c.beginPath(); 
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'red';
    c.stroke();






}

/*

arc(x, y, radius, startAngle, endAngle, counterclockwise)

Parameters

x - The horizontal coordinate of the arc's center.

y - The vertical coordinate of the arc's center.

radius - The arc's radius. Must be positive. 

startAngle - The angle at which the arc starts in radians, measured from the positive x-axis.

endAngle - The angle at which the arc ends in radians, measured from the positive x-axis.

counterclockwise (Optional )- An optional boolean value. If true, draws the arc counter-clockwise between the start and end angles. The default is false (clockwise).

Return value
*/