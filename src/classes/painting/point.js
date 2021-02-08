import {Figure} from "@/classes/painting/figure";

export class Point extends Figure{
    constructor(x, y, radius = 1, color = '#FFFFFF',
                speed, directionAngle) {
        super()
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.speed = speed ? speed : 0.5 + Math.random() * 0.5
        this.directionAngle = directionAngle ? directionAngle : Math.floor(Math.random() * 360)
        this.vector = {
            x: Math.cos(this.directionAngle) * this.speed,
            y: Math.sin(this.directionAngle) * this.speed
        }
    }
    resize(dr){
        this.radius += dr
    }
    resize2(dr){
        this.radius *= dr
    }
    move(dx, dy){
        this.x += dx
        this.y += dy
    }
    border(canvas = HTMLCanvasElement.prototype){
        if (this.x >= canvas.width || this.x <= 0) {
            this.vector.x *= -1;
        }
        if (this.y >= canvas.height || this.y <= 0) {
            this.vector.y *= -1;
        }
        if (this.x > canvas.width) this.x = canvas.width;
        if (this.y > canvas.height) this.y = canvas.height;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
    }
    update(canvas = HTMLCanvasElement.prototype){
        this.border(canvas);
        this.move(this.vector.x, this.vector.y)
    }
    draw(ctx = CanvasRenderingContext2D.prototype) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2)
        ctx.closePath()
        ctx.fillStyle = this.color
        ctx.fill()
    }
}
