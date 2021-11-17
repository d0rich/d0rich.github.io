<template>
  <footer class="border-light--accent footer">
    <div style="max-width: 1100px; margin: auto">
      <div class="footer__block--main">
        <nav class="mb-3">
          <div>Navigation:</div>
          <ul>
            <FooterRoute v-for="(route, index) in navigation.routes" :key="index" :route="route" />
          </ul>
        </nav>

        <div>
          <div>Connect with me:</div>
          <a href="mailto:d.orich@yandex.com" @click="logContact('email', 'footer')">
            <v-icon>mdi-email</v-icon>
            <span style="color: #FFFFFF; text-decoration: underline">d.orich@yandex.com</span>
          </a>
          <div>
            <v-btn icon target="_blank"
                   v-for="btn in connection.socials" :key="btn.href"
                   :href="btn.href" @click="logContact(connection.title.en, 'footer')" >
              <v-icon>{{btn.icon}}</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <div class="footer__block--bottom">
        <span>© {{new Date().getFullYear()}} Developer Nikolay Dorofeev (d0rich)</span>
      </div>
    </div>

  </footer>
</template>

<script>
import FooterRoute from "~/components/layout/FooterRoute";
import {routesNames} from "~/data/constants";

export default {
name: "Footer",
  components: {
    FooterRoute
  },
  data(){
    return{
      navigation: {
        routes: [
          { title: 'Home', route: { name: routesNames.HOME_PAGE } },
          { title: 'Resume',
            route: { name: routesNames.RESUME_CONTROLLER }, children: [
              //{ title: new Text('Фронтенд', 'Frontend'), route: { name: 'Resume' } },
              //{ title: new Text('Бэкенд', 'Backend'), route: { name: 'Resume' } },
              //{ title: new Text('Фуллстак', 'Fullstack'), route: { name: 'Resume' } }
            ] },
          { title: 'Portfolio', route: { name: routesNames.PORTFOLIO } },
          { title: 'News', route: { name: routesNames.NEWS_CONTROLLER } },
        ]
      },
      connection: {
        socials: [
          { href: 'https://t.me/d0rich', icon: 'mdi-telegram', text: 'telegram' },
          { href: 'https://vk.com/d0rich', icon: 'mdi-vk', text: 'vk' },
          { href: 'https://github.com/d0rich', icon: 'mdi-github', text: 'github' },
        ]
      }
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.footer{
  margin-top: 150px;
  width: 100%;
  padding: 2em 1em;
  border-radius: 0;
  border-width: 2px 0 0 0;
  font-size: 0.9rem;
}
.footer__block--main{
  display: flex;
  justify-content: space-between;
}
.footer__block--bottom{
  display: flex;
  justify-content: space-between;
}

</style>
