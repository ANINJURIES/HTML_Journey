
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');


canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


// creating circle using arc 
// c.beginPath()
// c.arc(300, 300, 100, 0, Math.PI * 2, false)
// c.stroke();

var x = 300;
var y = 300;
var rad = 30;
var dx = 15
var dy = 13




function anime() {

    // requestAnimationFrame is defined for looping purpose in fucntion. if you give diffrent function name like wise it will throw an error 
    requestAnimationFrame(anime)

    c.clearRect(0, 0, innerWidth, innerHeight)

    // creating path 
    c.beginPath()
    c.arc(x, y, rad, 0, Math.PI * 2, false)
    c.stroke();


    // x ni value contious vadhi rahi che tya sudhi ke (x+rad > innerWidth) innerWidth thi moti na thay, hyare thay tyare x = x -dx means x ni value ghati rahi che pan kya sudhi ke jya sudhi (x-rad <0 ) ke e left side touc hna thay 


    if (x + rad > innerWidth || x - rad < 0) {
        dx = -dx;
        // console.log("x = " +dx + " x : " + x) to see how value is getting changes as touc both side

    }

    if (y + rad > innerHeight || y - rad < 0) {
        dy = -dy;

        //  console.log("y = " +dy + " y : " + y) to see how value is getting changes as touc both side

    }

    x += dx;  // changing x value 
    y += dy; // changing y value 



}

anime()


/*

c.clearRect()

Parameters

x

    The x-axis coordinate of the rectangle's starting point.
y

    The y-axis coordinate of the rectangle's starting point.
width

    The rectangle's width. Positive values are to the right, and negative to the left.
height

    The rectangle's height. Positive values are down, and negative are up.

*/