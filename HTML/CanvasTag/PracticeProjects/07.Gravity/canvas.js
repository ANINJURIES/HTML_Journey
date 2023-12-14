// errors of stuck 


var canvas = document.querySelector('canvas')
var c = canvas.getContext('2d')

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const gravity = 1;
const friction = 0.9;




// resize on changine window(browser size)

window.addEventListener('resize', function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
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

        c.fillStyle= this.color
        c.fill();

    }
    this.update = function () {

        if (this.x + this.rad > innerWidth || this.x - this.rad < 0) {
            this.dx = -this.dx
        }else{
            this.dx +=1;
        }

        if (this.y + this.rad > innerHeight || this.y - this.rad < 0) {
            this.dy = -this.dy*friction;
        }else{
            this.dy += gravity;
        }

        
        this.y += this.dy;


        this.draw();
    }



}



var circleArray = [];


for (var i = 0; i < 500 ; i++) {
    var x = Math.random() * (innerWidth - rad * 3) + rad;
    var dx = (Math.random() - 0.5) * 2;
    var y = Math.random() * (innerHeight - rad * 3) + rad;
    var dy = (Math.random() - 0.5) * 2;
    var rad = Math.floor((Math.random() * 25) + 1);  // so we get radius value form 1 to 6

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