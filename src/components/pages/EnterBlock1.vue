<template>
  <div ref="container" v-resize="onResize"
       class="image-container" :style="{marginLeft: mainDisplacement}">
    <img :src="plants" alt="floor">
    <img :src="gear_little" alt="gear_little"
         class="float-img gear_little" :class="{disabled: disable.LittleGear}">
    <img :src="gear_big" alt="gear_big"
         class="float-img gear_big" :class="{disabled: disable.BigGear}">
    <img :src="code_window" alt="code_window"
         class="float-img code_window" :class="{disabled: disable.CodeWindow}">
    <img :src="plants" alt="plants"
         class="float-img plants" :class="{disabled: disable.Plants}">
    <img :src="window" alt="window"
         class="float-img window" :class="{disabled: disable.Window}">
    <img :src="code_snippets" alt="code_snippets"
         class="float-img code_snippets" :class="{disabled: disable.CodeSnippets}">
    <img :src="code_box" alt="code_box"
         class="float-img code_box" :class="{disabled: disable.CodeBox}">
    <img :src="speech_bubble" alt="speech_bubble"
         class="float-img speech_bubble" :class="{disabled: disable.SpeechBubble}">
    <img :src="character" alt="character"
         class="float-img character" :class="{disabled: disable.Character}">

  </div>
</template>

<script>
import character from '@/assets/home/code_fragments/character.svg'
import code_box from '@/assets/home/code_fragments/code_box.svg'
import code_snippets from '@/assets/home/code_fragments/code_snippets.svg'
import code_window from '@/assets/home/code_fragments/code_window.svg'
import floor_and_shadows from '@/assets/home/code_fragments/floor_and_shadows.svg'
import gear_big from '@/assets/home/code_fragments/gear_big.svg'
import gear_little from '@/assets/home/code_fragments/gear_little.svg'
import plants from '@/assets/home/code_fragments/plants.svg'
import speech_bubble from '@/assets/home/code_fragments/speech_bubble.svg'
import windowP from '@/assets/home/code_fragments/window.svg'

export default {
name: "HomeEnterImage",
  data(){
    return{
      character, code_box, code_snippets, code_window,
      floor_and_shadows, gear_big, gear_little, plants,
      speech_bubble, window: windowP,
      mainDisplacement: 0,
      disable:{
        LittleGear: true,
        BigGear: true,
        CodeWindow: true,
        Plants: true,
        Window: true,
        CodeSnippets: true,
        CodeBox: true,
        SpeechBubble: true,
        Character: true
      }
    }
  },
  methods:{
    onResize(){
      if (this.$refs.container.offsetWidth <= window.innerWidth)
        this.mainDisplacement = 0
      else
        this.mainDisplacement = `${-(this.$refs.container.offsetWidth - window.innerWidth)/2}px`
    }
  },
  async mounted() {
    await this.timeout(1000)
    this.disable.CodeWindow = false
    await this.timeout(200)
    this.disable.LittleGear = false
    this.disable.Window = false
    await this.timeout(300)
    this.disable.BigGear = false
    this.disable.CodeSnippets = false
    await this.timeout(500)
    this.disable.CodeBox = false
    await this.timeout(200)
    this.disable.Character = false
    await this.timeout(200)
    this.disable.SpeechBubble = false
  }
}
</script>

<style scoped lang="scss">
.image-container{
  width: 65vh;
  position: relative;
}
img{
  width: 100%;
}
.float-img{
  position: absolute;
  left: 0;
}

.gear_little{
  transition: all 1s ease;
  &.disabled{
    transform: translate(-170%, -100%);
  }
}
.gear_big{
  transition: all 1s ease;
  &.disabled{
    transform: translate(-170%, -100%);
  }
}
.code_window{
  transition: all 1s ease;
  &.disabled{
    transform: translateY(-100%);
  }
}
.window{
  transition: all 1s ease;
  &.disabled{
    transform: translate(170%, -100%);
  }
}
.code_snippets{
  transition: all 1s ease;
  &.disabled{
    transform: translate(-170%, 100%);
  }
}
.code_box{
  transition: all 1s ease;
  &.disabled{
    transform: translateY(-100%);
  }
}
.character{
  transition: all 1s ease;
  &.disabled{
    transform: translateX(100%);
  }
}
.speech_bubble{
  transition: all 1s ease;
  &.disabled{
    transform: translateY(-100%);
  }
}
</style>
