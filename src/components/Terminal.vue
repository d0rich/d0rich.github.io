<template>
  <div class="frame">
    <div class="head">
      {{data.terminal.text}}:
    </div>
    <div class="content">
      <div v-for="(line, index) in data.startText" :key="index"
           :style="{opacity: line.show*1}"
           style="min-height: 1.5em">
        {{line.text.text}}
      </div>
      <div :style="{opacity: showCommand*1}">
        <span style="word-break: break-all;" >{{href}}></span>{{command}}
      </div>
      <div :style="{opacity: showContent*1}" class="mb-5">
        <slot />
      </div>

    </div>

  </div>
</template>

<script>
import terminal from "@/data/terminal";
export default {
name: "Terminal",
  props:{
    reveal: Boolean,
    enterWord: String
  },
  data(){
    return{
      data: terminal,
      href: document.location.href,
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
    for (const text of this.data.startText) {
      text.show = false
    }
    if (this.reveal)
    {
      await this.timeout(1000)
      for (const text of this.data.startText) {
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
      for (const text of this.data.startText) {
        text.show = true
      }
      this.command = this.enterWord
      this.showCommand = true
      this.showContent = true
    }

  }
}
</script>

<style scoped lang="scss">
.frame{
  border: solid 3px var(--v-primary-base);
  width: 100%;
  max-width: 700px;
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
