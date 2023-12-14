
var canvas = document.querySelector('canvas')
var c = canvas.getContext('2d')

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// 1. mouse object to store and update mouse movements 
var mouse = {
    x: undefined,
    y: undefined
}

// 2.mousemove listens to mouse movement 
window.addEventListener('mousemove', function (event) {
    mouse.x = event.x
    mouse.y = event.y
    console.log(x)
    console.log(y)
})

// resize on changine window(browser size)

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

// color array 

var color = [
    '#BE7C4D',
    '#92140C',
    '#353238',  
    '#BE5A38',
    '#C1B4AE'
];

function Circle(x, dx, y, dy, rad) {
    this.x = x;
    this.dx = dx;
    this.y = y;
    this.dy = dy;
    this.rad = rad;
    this.minRad= rad;
    this.color = color[Math.floor(Math.random() * color.length)]
    this.draw = function () {
        c.beginPath()
        c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false)
        c.stroke();


        // c.fillStyle = color[Math.floor(Math.random() * color.length)]
        c.fillStyle= this.color
        c.fill();

    }
    this.update = function () {

        if (this.x + this.rad > innerWidth || this.x - this.rad < 0) {
            this.dx = -this.dx
        }

        if (this.y + this.rad > innerHeight || this.y - this.rad < 0) {
            this.dy = -this.dy
        }

        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.rad < 40) {
                this.rad += 1;
            }
        } else if (this.rad > this.minRad) {
            this.rad -= 1;

        }




        this.draw();
    }



}



var circleArray = [];


for (var i = 0; i < 1000; i++) {
    var x = Math.random() * (innerWidth - rad * 3) + rad;
    var dx = (Math.random() - 0.5) * 2;
    var y = Math.random() * (innerHeight - rad * 3) + rad;
    var dy = (Math.random() - 0.5) * 2;
    var rad = Math.floor((Math.random() * 5) + 1);  // so we get radius value form 1 to 6

    circleArray.push(new Circle(x, dx, y, dy, rad))
}




function anime() {
    requestAnimationFrame(anime);
    c.clearRect(0, 0, innerWidth, innerHeight)

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }


}

anime()