<template>
  <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
    <polygon v-for="scale, index in scales" :key="index" 
          :points="pointsToString(shrinkStar(fullStarPoints, scale))" 
          :class="{
            'fill-neutral-500': index % 2,
            'fill-neutral-800': !(index % 2),
          }"/>
  </svg>
</template>

<script lang="ts">

export default defineComponent({
  name: 'Stats',
  setup(){
    const fullStarPoints = ref<number[][]>([
      [500,0], // 1
      [610,350], // 1-2
      [980,350], // 2
      [680,570], // 2-3
      [790,910], // 3
      [500,700], // 3-4
      [210,910], // 4
      [320,570], // 4-5
      [20,350], // 5
      [390,350] // 5-1
    ])

    return {
      fullStarPoints,
      scales: ref<number[]>([1, 0.8, 0.6, 0.4, 0.2]),
      pointsToString(points: number[][]){
        return points.map(pair => pair.join(',')).join(' ')
      },
      shrinkStar(points: number[][], scale: number, cx = 500, cy = 500){
        return points.map(coords => {
          return [
            coords[0] - (coords[0] - cx) * (1 - scale),
            coords[1] - (coords[1] - cy) * (1 - scale),
          ]
        })
      }
    }
  }
})
</script>