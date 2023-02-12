<template>
  <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
    <polygon v-for="star, index in scaledStars" :key="index" 
          :points="pointsToString(star)" 
          :class="{
            'fill-neutral-500': index % 2,
            'fill-neutral-800': !(index % 2),
          }"/>
    <!-- 1 -->
    <polygon :points="pointsToString([ 
        starFromValue(firstStat.value)[posToIndex['1']],
        starFromValue(Math.min(firstStat.value, fifthStat.value))[posToIndex['5-1']],
        center
      ])" class="fill-yellow-500" />
    <polygon :points="pointsToString([ 
        starFromValue(firstStat.value)[posToIndex['1']],
        starFromValue(Math.min(firstStat.value, secondStat.value))[posToIndex['1-2']],
        center
      ])"  class="fill-yellow-700" />
    <!-- 2 -->
    <polygon :points="pointsToString([ 
        starFromValue(secondStat.value)[posToIndex['2']],
        starFromValue(Math.min(firstStat.value, secondStat.value))[posToIndex['1-2']],
        center
      ])" class="fill-yellow-500" />
    <polygon :points="pointsToString([ 
        starFromValue(secondStat.value)[posToIndex['2']],
        starFromValue(Math.min(thirdStat.value, secondStat.value))[posToIndex['2-3']],
        center
      ])"  class="fill-yellow-700" />
    <!-- 3 -->
    <polygon :points="pointsToString([ 
        starFromValue(thirdStat.value)[posToIndex['3']],
        starFromValue(Math.min(secondStat.value, thirdStat.value))[posToIndex['2-3']],
        center
      ])" class="fill-yellow-500" />
    <polygon :points="pointsToString([ 
        starFromValue(thirdStat.value)[posToIndex['3']],
        starFromValue(Math.min(thirdStat.value, forthStat.value))[posToIndex['3-4']],
        center
      ])"  class="fill-yellow-700" />
    <!-- 4 -->
    <polygon :points="pointsToString([ 
        starFromValue(forthStat.value)[posToIndex['4']],
        starFromValue(Math.min(thirdStat.value, forthStat.value))[posToIndex['3-4']],
        center
      ])" class="fill-yellow-500" />
    <polygon :points="pointsToString([ 
        starFromValue(forthStat.value)[posToIndex['4']],
        starFromValue(Math.min(forthStat.value, fifthStat.value))[posToIndex['4-5']],
        center
      ])"  class="fill-yellow-700" />
    <!-- 5 -->
    <polygon :points="pointsToString([ 
        starFromValue(fifthStat.value)[posToIndex['5']],
        starFromValue(Math.min(forthStat.value, fifthStat.value))[posToIndex['4-5']],
        center
      ])" class="fill-yellow-500" />
    <polygon :points="pointsToString([ 
        starFromValue(fifthStat.value)[posToIndex['5']],
        starFromValue(Math.min(fifthStat.value, firstStat.value))[posToIndex['5-1']],
        center
      ])"  class="fill-yellow-700" />
  </svg>
</template>

<script lang="ts">

export default defineComponent({
  name: 'Stats',
  props: {
    titles: Array as () => string[],
    values: Array as () => number[]
  },
  setup(props){
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
    const scales = ref<number[]>([1, 0.8, 0.6, 0.4, 0.2])
    const posToIndex = {
      '1': 0,
      '1-2': 1,
      '2': 2,
      '2-3': 3,
      '3': 4,
      '3-4': 5,
      '4': 6,
      '4-5': 7,
      '5': 8,
      '5-1': 9
    }
    const center = [500, 500]
    function pointsToString(points: number[][]){
      return points.map(pair => pair.join(',')).join(' ')
    }
    function shrinkStar(points: number[][], scale: number, cx = 500, cy = 500){
      return points.map(coords => {
        return [
          coords[0] - (coords[0] - cx) * (1 - scale),
          coords[1] - (coords[1] - cy) * (1 - scale),
        ]
      })
    }
    const scaledStars = computed(() => {
      return scales.value.map((scale) => shrinkStar(fullStarPoints.value, scale))
    })
    function starFromValue(value: number) {
      return scaledStars.value[5 - value]
    }
    function statFromIndex(index: number) {
      return {
        value: props.values ? props.values[index] ?? 1 : 1,
        title: props.titles ? props.titles[index] ?? '' : ''
      }
    }
    return {
      fullStarPoints, posToIndex, center,
      scales, scaledStars,
      starFromValue,
      pointsToString,
      shrinkStar,
      firstStat: computed(() => statFromIndex(0)),
      secondStat: computed(() => statFromIndex(1)),
      thirdStat: computed(() => statFromIndex(2)),
      forthStat: computed(() => statFromIndex(3)),
      fifthStat: computed(() => statFromIndex(4)),
    }
  }
})
</script>