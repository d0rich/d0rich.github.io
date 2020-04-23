<template>
  <div class="CoverElements">
    <header class="colors head">
      <div class="logo">
        <div id="logo">
          <img src="img/LogoD.svg" id="logoimg" />
          <div class="triangle" id="triangle1"></div>
          <div class="triangle" id="triangle2"></div>
          <div class="glitch" id="glitch1"></div>
          <div class="glitch" id="glitch2"></div>
          <div class="glitch" id="glitch3"></div>
          <div id="square"></div>
        </div>
        <div>
          <span>
            <font>orich</font>
            <font>prod.</font>
          </span>
        </div>
      </div>
    </header>

    <div id="NavPanel">
      <ul>
        <li v-for="i in Sections"><a :href=i.link>
            <nav>{{i.name}}</nav>
          </a></li>
      </ul>

      <div>
        <div v-for="i in Social">
          <img :src=i.imglink />
          <span><a :href=i.link>{{i.nick}}</a></span>
        </div>
      </div>
    </div>

    <div id="MenuButton">
      <div class="Body"></div>
      <div class="Body"></div>
      <div class="Line"></div>
      <div class="Line"></div>
      <div class="Line"></div>
    </div>
    <div id="block"></div>
  </div>
  <!-- Конец покрывающих элементов -->
</template>
<script src="../NavPanel.js"></script>
<script src="../LogoAnim.js"></script>
<script src="commonVue.js"></script>
<style>

</style>
