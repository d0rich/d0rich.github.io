<template>
  <div class="frame">
    <div class="head">
			Terminal:
    </div>
    <div class="content">
      <div v-for="(line, index) in startText" :key="index"
           :style="{opacity: line.show*1}"
           style="min-height: 1.5em">
        {{line.text}}
      </div>
      <div :style="{opacity: showCommand*1}">
        <span style="word-break: break-all;" >{{href}}></span> {{command}}
      </div>
      <div :style="{opacity: showContent*1}" class="mb-5">
        <slot />
      </div>

    </div>

  </div>
</template>

<script>
export default {
name: "Terminal",
  props:{
    reveal: Boolean,
    enterWord: String
  },
  data(){
    return{
			startText:[
				{ text: 'Dorich site [Version 1.0.19012021]', show: false},
				{ text: `(c) Developer Nikolay Dorofeev (d0rich), ${new Date().getFullYear()}. All rights reserved.`,
					show: false },
				{ text:  ' ', show: false}
			],
      href: '',
      showCommand: false,
      command: '',
      showContent: false,
    }
  },
  methods:{
    async printCommand(command){
      const tick = 2000 / command.length
      for (const char of command) {
        await this.timeoutRand(tick)
        this.command += char
      }
    }
  },
  async mounted(){
    //this.href = `https://d0rich.github.io${this.$route.fullPath}`
    this.href = document.location.href
    for (const text of this.startText) {
      text.show = false
    }
    if (this.reveal)
    {
      await this.timeout(1000)
      for (const text of this.startText) {
        await this.timeout(300)
        text.show = true
      }
      await this.timeout(300)
      this.showCommand = true
      await this.printCommand(this.enterWord)
      await this.timeout(500)
      this.showContent = true
    }
    else {
      for (const text of this.startText) {
        text.show = true
      }
      this.command = this.enterWord
      this.showCommand = true
      this.showContent = true
    }
    this.$emit('revealed')
  }
}
</script>

<style scoped lang="scss">
.frame{
  border: solid 3px var(--v-primary-base);
  width: 100%;
  max-width: 700px;
  background-color: var(--v-secondary-darken2);
  .head{
    position: relative;
    width: 100%;
    background-color: var(--v-primary-base);

  }
  .content{
    padding: 5px;
  }
}

</style>
