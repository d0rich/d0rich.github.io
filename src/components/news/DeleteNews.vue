<template>
  <div v-if="isAuth">
    <v-btn block @click="showModal = ! showModal" color="red">
      <slot />
    </v-btn>
    <v-dialog class="projectModal" v-model="showModal" width="300px"
              transition="glitch-transition" persistent scrollable>
      <v-card>
        <v-form :disabled="load.delete" @submit.prevent="deleteReq" v-model="valid" ref="form">
          <v-toolbar color="primary">
            <slot />
            <v-spacer />
            <v-btn @click="showModal = !showModal" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <div>{{texts.message.text}}</div>
            <div>stringId: {{stringId}}</div>
            <v-text-field class="mt-3"
                          v-model="input"
                          :loading="load.delete"
                          outlined dense
                          :rules="rules"
                          label="stringId" />
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer />
            <v-btn :loading="load.delete" color="primary" @click="showModal = !showModal">
              {{texts.cancel.text}}
            </v-btn>
            <v-btn :loading="load.delete" color="red" type="submit">
              {{texts.delete.text}}
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {Text} from "@/classes";
import {mapActions} from "vuex";

export default {
name: "DeleteProject",
  props:{
    id: Number,
    stringId: String
  },
  data(){
    return{
      showModal: false,
      load: {
        delete: false
      },
      texts: {
        delete: new Text('Удалить', 'Delete'),
        cancel: new Text('Отмена', 'Cancel'),
        message: new Text('Введите stringId, чтобы удалить новость.', 'Input stringId to delete news.')
      },
      input: '',
      valid: false,
      rules: [
          v => v === this.stringId || 'stringId is incorrect'
      ]
    }
  },
  methods: {
    ...mapActions(['getServerErrorMessage']),
    async deleteReq(){
      this.$refs.form.validate()
      if (this.valid) {
        this.load.delete = true
        try {
          const result = await this.axios.post(`/news/delete/${this.id}`,
              {
                stringId: this.stringId
              }, this.authHeaders)
          console.log(result.data)
        } catch (e) {
          this.getServerErrorMessage(e)
        }
        this.load.delete = false
        this.showModal = false
        this.$emit('deleted')
      }
    }
  }
}
</script>

<style scoped>

</style>
