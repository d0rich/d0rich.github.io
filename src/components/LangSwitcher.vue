<template>
  <v-menu :offset-x="headerOn" :offset-y="!headerOn" bottom>
    <template v-slot:activator="{ on: menu, attrs }">
      <v-tooltip :disabled="!headerOn" bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
              :class="{'lang-switcher': !headerOn}"
              icon
              v-bind="attrs"
              v-on="{ ...tooltip, ...menu }"
          >
            <v-icon>mdi-earth</v-icon>
          </v-btn>
        </template>
        <span>{{tooltip.getText(lang)}}</span>
      </v-tooltip>
    </template>
    <v-list dense>
      <v-list-item
          v-for="(item, index) in languages"
          :key="index" link
          @click="setLang(item.short)"
      >
        <v-list-item-action-text :class="{active: item.short === lang}">
          {{ item.name }}<span style="opacity: 0" :class="{cursor: lang === item.short}">_</span>
        </v-list-item-action-text>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import {languages} from "@/data/languages";
import {Text} from "@/classes/text";
import {mapGetters, mapMutations} from 'vuex'

export default {
name: "LangSwitcher",
  data(){
    return{
      languages: languages,
      tooltip: new Text('Выбать язык', 'Choose language')
    }
  },
  computed:{
    ...mapGetters(['headerOn'])
  },
  methods:{
    ...mapMutations(['setLang'])
  }
}
</script>

<style scoped>
.lang-switcher{
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 10000;
}
.active{
  color: var(--v-primary-lighten2) !important;
}
</style>
