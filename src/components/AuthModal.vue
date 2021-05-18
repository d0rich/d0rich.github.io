<template>
  <div>
    <span v-if="!login"
          v-on:click="showModal = !showModal"
          style="user-select: none; cursor: pointer">
      Вход
    </span>
    <span v-else
          @dblclick="logout"
          style="user-select: none; cursor: pointer">
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
            <v-btn @click="showModal = !showModal">
              {{text.exit.text}}
            </v-btn>
            <v-btn :loading="loginRequest" type="submit">
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
    ...mapActions(["authByPwd", "logout"]),
    async authorize(){
      this.loginRequest = true
      this.error = await this.authByPwd(this.authData)
      this.loginRequest = false
      if (this.login) this.showModal = false
    }
  }
}
</script>

<style scoped>
.auth-modal{
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
}
</style>
