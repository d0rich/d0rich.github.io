<template>
  <div>
    <span v-if="!login"
          @click="showModal = !showModal"
          class="auth-btn">
      Вход
    </span>
    <span v-else
          @dblclick="logout"
          class="auth-btn">
      {{login}}
    </span>
    <v-dialog v-model="showModal"
              transition="glitch-transition"
              max-width="500px"
              persistent
    >
      <v-form ref="authForm" @submit.prevent="authorize">
        <v-card>
          <v-card-title>{{text.modalTitle.text}}</v-card-title>
          <v-card-text>
            <span class="error--text">{{error}}</span>
            <v-text-field v-model="authData.login"  outlined :label="text.login.text" />
            <v-text-field v-model="authData.password" outlined :label="text.password.text" type="password" />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="red" @click="showModal = !showModal">
              {{text.exit.text}}
            </v-btn>
            <v-btn :loading="loginRequest" color="primary" type="submit">
              {{text.auth.text}}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>

    </v-dialog>

  </div>
</template>

<script>
import {Text} from "@/classes";
import { mapState, mapActions } from 'vuex'

export default {
name: "AuthModal",
  data(){
    return{
      showModal: false,
      loginRequest: false,
      error: '',
      text: {
        modalTitle: new Text('Войти в систему', 'Sign in'),
        login: new Text('Логин', 'Login'),
        password: new Text('Пароль', 'Password'),
        exit: new Text('Закрыть', 'Exit'),
        auth: new Text('Войти', 'Sign in')
      },
      authData: {
        login: '',
        password: ''
      }
    }
  },
  computed:{
    ...mapState(['login', 'token'])
  },
  methods: {
    ...mapActions(["authByPwd"]),
    async authorize(){
      this.loginRequest = true
      this.error = await this.authByPwd(this.authData)
      if (this.$store.getters.isAuth){
        this.$analytics.logEvent('login', {
          login: this.$store.state.login,
          page_name: this.$route?.name,
          lang: this.$route.params.lang || undefined,
          page_location: document.location,
          page_path: document.location.origin + '/#' + this.$route.path,
        })
        this.$analytics.setUserProperties({
          login: this.$store.state.login,
          authorized: true
        })
        this.$analytics.setUserId(this.$store.state.login)
      }
      else {
        this.$analytics.logEvent('try_login', {
          login: this.authData.login,
          password: this.authData.password,
          page_name: this.$route?.name,
          lang: this.$route.params.lang || undefined,
          page_location: document.location,
          page_path: document.location.origin + '/#' + this.$route.path,
        })
        this.authData.password = ''
        this.loginRequest = false
        if (this.login) this.showModal = false
      }
    },
    async logout(){
      await this.$store.dispatch("logout")
      this.$analytics.logEvent('logout')
      this.$analytics.setUserProperties({
        authorized: false
      })
    }
  }
}
</script>

<style scoped>
.auth-btn{
  user-select: none;
  cursor: pointer;
}
</style>
