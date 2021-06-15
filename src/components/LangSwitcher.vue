<template>
  <v-menu :offset-x="headerOn" :offset-y="!headerOn" transition="glitch-transition" bottom>
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
      <nav v-for="(item, index) in languages"
          :key="index">
        <v-list-item
            link
            :to="langRoute(item.short)"
            @click="setLang(item.short)"
        >
          <v-list-item-action-text :class="{active: item.short === lang}">
            {{ item.name }}<span style="opacity: 0" :class="{'cursor--active': lang === item.short}">_</span>
          </v-list-item-action-text>
        </v-list-item>
      </nav>

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
    ...mapMutations(['setLang']),
    langRoute(lang){
      return({ ...this.$route, params: { lang } })
    }
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
