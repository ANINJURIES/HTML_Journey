
var canvas = document.querySelector('canvas')
var c = canvas.getContext('2d')

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;



// creating object for circle 
function Circle(x, dx, y, dy, rad) {
    this.x = x;
    this.dx = dx;
    this.y = y;
    this.dy = dy;
    this.rad = rad;
    this.draw = function () {
        c.beginPath()
        c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false)
        c.stroke();

        // fill color to the circle
        c.fillStyle= 'orange';    
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

        // basicaaly by adding here we are updating values and recalling draw function and endless loop 
        this.draw();
    }



}


// new object created using constructor 
// var circle1 = new Circle(300,1.5,200,1.7,30)


var circleArray = [];

// we are creating objects of circles 
for (var i = 0; i < 100; i++) {
    var x = Math.random() * (innerWidth - rad *3) + rad;
    var dx = (Math.random() - 0.5) *2;               // basically we created dx of range (-0.5 to 0.5)
    var y = Math.random() * (innerHeight - rad *3) + rad;
    var dy = (Math.random() - 0.5) *2;               // basically we created dx of range (-0.5 to 0.5)
    var rad = 30;

    // creating object using constructor 
    circleArray.push(new Circle(x, dx, y, dy, rad))
}




function anime() {
    requestAnimationFrame(anime);
    c.clearRect(0, 0, innerWidth, innerHeight)


    // we are apping animaton to our objectes  
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }


}

anime()