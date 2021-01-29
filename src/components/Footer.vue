<template>
  <div class="border-light--accent footer">
    <div class="footer__block--main">
      <div style="height: 50px">Страницы:</div>
      <div>
        <div>{{connection.title.text}}:</div>
        <div><v-icon>mdi-email</v-icon> d.orich@yandex.com</div>
        <v-btn icon target="_blank"
            v-for="btn in connection.socials" :key="btn.href"
            :href="btn.href" >
          <v-icon>{{btn.icon}}</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="footer__block--bottom">
      <span>© 2021 {{dorich.text}}</span>
    </div>
  </div>
</template>

<script>
import {Text} from "@/classes";

export default {
name: "Footer",
  data(){
    return{
      dorich: new Text('Свободный программист Dorich', 'Free programmer Dorich'),
      connection: {
        title: new Text('Связаться со мной', 'Connect with me'),
        socials: [
          { href: 'https://t.me/d0rich', icon: 'mdi-telegram', text: 'vk' },
          { href: 'https://vk.com/d0rich', icon: 'mdi-vk', text: 'vk' },
          { href: 'https://github.com/d0rich', icon: 'mdi-github', text: 'github' },
        ]
      }
    }
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
