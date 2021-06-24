<template>
  <div class="border-light--primary skills-note">
    <v-text-field v-model="skillNote.id" label="id"
                  outlined dense :disabled="!skillNote.new"
                  @input="checkId" autocomplete="off"
                  :loading="load || loadId" :messages="[idMessage]" />
    <multi-lang-text-field v-model="skillNote.title"
                           :label="text.title.text"
                           :loading="load"
                           outlined dense />
    <div>
      <div class="mb-2">{{text.skills.text}}:</div>
      <v-btn v-if="!skillNote.skills.length" icon @click="skillNote.skills.push('')">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-text-field v-for="(skill, index) in skillNote.skills" :key="index"
                    :label="(index + 1).toString()" suffix=";"
                    v-model="skillNote.skills[index]"
                    prepend-icon="mdi-plus" append-icon="mdi-close"
                    @click:prepend="skillNote.skills.splice(index + 1, 0, '')"
                    @click:append="skillNote.skills.splice(index, 1)"
                    :loading="load" autocomplete="off"
                    outlined dense />
    </div>
    <div class="error--text mb-2">
      {{errMessage}}
    </div>
    <v-row no-gutters>
      <v-btn color="red" icon
             @click="$emit('delete')"
             :loading="load" >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn color="primary" icon
             @click="refresh"
             :disabled="!!skillNote.new" :loading="load" >
        <v-icon>mdi-reload</v-icon>
      </v-btn>
      <v-spacer/>
      <v-btn color="green" icon
             @click="saveSkillsNote" :loading="load" >
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import MultiLangTextField from "@/components/custom_inputs/MultiLangTextField";
import {mapActions} from 'vuex'
import {Text} from "@/classes";
export default {
name: "EditSkillsNote",
  components: {
    MultiLangTextField
  },
  props: {
    note: {
      required: true,
      type: Object
    }
  },
  watch:{
    note(){
      this.skillNote = this.note
    }
  },
  data(){
    return{
      skillNote: {
        id: '',
        new: true,
        title: new Text(),
        skills: []
      },
      load: false,
      loadId: false,
      idMessage: '',
      text: {
        title: new Text('Название', 'Title'),
        skills: new Text('Навыки', 'Skills'),
        save: new Text('Сохр.', 'Save'),
        refresh: new Text('Обновить', 'Refresh'),
        delete: new Text('Удалить', 'Delete')
      },
      errMessage: ''
    }
  },
  methods: {
    ...mapActions(["getSkillsNote", 'setSkillsNote', 'getServerErrorMessage', 'checkSkillId']),
    async checkId(){
      this.loadId = true
      try {
        this.idMessage = await this.checkSkillId(this.skillNote.id)? 'Id is not free': 'Id is free'
      }
      catch (e) {
        this.errMessage = await this.getServerErrorMessage(e)
      }
      this.loadId = false
    },
    async saveSkillsNote(){
      this.load = true
      try {
        await this.setSkillsNote({...this.skillNote, new: undefined})
        this.skillNote.new = false
        this.$emit('saved', this.skillNote)
      }
      catch (e) {
        this.errMessage = await this.getServerErrorMessage(e)
      }
      this.load = false
    },
    async refresh(){
      this.load = true
      try {
        this.skillNote = await this.getSkillsNote(this.skillNote.id)
        this.errMessage = ''
      }
      catch (e) {
        this.errMessage = this.getServerErrorMessage(e)
      }
      this.load = false
    }
  },
  created() {
    this.skillNote = this.note
  }
}
</script>

<style scoped>
.skills-note{
  font-size: 0.93rem;
  padding: 1em 2em;
  width: 22em;
  margin: 1em;
  background-color: var(--v-secondary-darken2);
}
@media screen and (max-width: 900px) {
  .skills-note{
    width: 90%;
  }

}
</style>
