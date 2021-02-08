<template>
  <div class="load-block">
    <canvas ref="canvas" height='60' width='150' />
    <div class="load-block__title">{{text.text}}...</div>
  </div>
</template>

<script>
import {Point, Line} from "@/classes/painting";
import {Text} from "@/classes";

export default {
name: "Loading",
  data(){
    return{
      canvas: HTMLCanvasElement.prototype,
      ctx: CanvasRenderingContext2D.prototype,
      text: new Text('Загрузка', 'Loading')
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')
    const points = [new Point()]
    points.shift()
    for (let i = 0; i < 6; i++)
      points.push(new Point(this.canvas.width * Math.random(), this.canvas.height * Math.random(), 3))
    const lines = [
      new Line(points[0], points[1], 2),
      new Line(points[1], points[2], 2),
      new Line(points[2], points[0], 2),
      new Line(points[3], points[4], 2),
      new Line(points[4], points[5], 2),
      new Line(points[5], points[3], 2)
    ]
    const loop = () => {
      window.requestAnimationFrame(loop)
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      points.forEach(point => {
        point.update(this.canvas)
        point.draw(this.ctx)
      })
      lines.forEach(line => {
        line.draw(this.ctx)
      })
    }
    window.requestAnimationFrame(loop)
  }
}
</script>

<style scoped>
.load-block{
  margin: auto;
  padding: 1rem;
  width: fit-content;
  border-radius: .3rem;
  background-color: rgba(0, 0, 0, .8);
}
.load-block__title{
  text-align: center;
}
</style>
