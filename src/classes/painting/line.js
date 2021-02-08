import {Figure} from "@/classes/painting/figure";
import {Point} from "@/classes/painting/point";

export class Line extends Figure{
    constructor(start = new Point(), end = new Point(), width = 1, color = '#FFFFFF') {
        super()
        this.start = start
        this.end = end
        this.width = width
        this.color = color
    }
    move(dx, dy){
        this.start.move(dx,dy)
        this.end.move(dx, dy)
    }
    get length(){
        return Math.sqrt((this.start.x - this.end.x) ** 2 + (this.start.y - this.end.y) ** 2)
    }
    draw(ctx = CanvasRenderingContext2D.prototype) {
        ctx.beginPath()
        const widthCoef = 1000 / (this.length < 1 ? 1 : this.length) ** 2
        ctx.lineWidth = this.width * (widthCoef > 1 ? 1 : widthCoef)
        ctx.strokeStyle = this.color
        ctx.lineCap = 'round'
        ctx.moveTo(this.start.x, this.start.y)
        ctx.lineTo(this.end.x, this.end.y)
        ctx.stroke()
    }
}
