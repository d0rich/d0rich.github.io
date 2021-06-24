<template>
  <div class="border-light--primary time-note">
    <div>
      <v-text-field v-model="timeNote.id" label="id"
                    outlined dense :disabled="!timeNote.new"
                    @input="checkId" autocomplete="off"
                    :loading="load || loadId" :messages="[idMessage]" />
      <multi-lang-text-field :label="text.title.text" :loading="load"
                             v-model="timeNote.title" outlined dense />
      <multi-lang-text-field :label="text.place.text" :loading="load"
                             v-model="timeNote.place" outlined dense />
      <v-row no-gutters>
        <v-text-field :loading="load" outlined dense autocomplete="off"
                      v-model="period.begin" :label="text.beginDate.text"
                      type="date" />
        <v-text-field :loading="load" outlined dense autocomplete="off"
                      v-model="period.end" :label="text.endDate.text"
                      type="date" />
      </v-row>
      <multi-lang-text-field :label="text.description.text" textarea :loading="load"
                             v-model="timeNote.description" outlined dense />
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
             :disabled="!!timeNote.new" :loading="load" >
        <v-icon>mdi-reload</v-icon>
      </v-btn>
      <v-spacer/>
      <v-btn color="green" icon
             @click="saveTimeNote" :loading="load" >
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>

import {Text} from "@/classes";
import MultiLangTextField from "@/components/custom_inputs/MultiLangTextField";
import {mapActions} from 'vuex'

export default {
name: "EditTimeNote",
  components: {MultiLangTextField},
  props: {
    note: {
      required: true,
      type: Object
    },
    edu: Boolean,
    exp: Boolean
  },
  data(){
    return{
      timeNote: null,
      text: {
        title: new Text('Название', 'Title'),
        place: new Text('Место', 'Place'),
        beginDate: new Text('Время начала', 'Start date'),
        endDate: new Text('Время окончания', 'End date'),
        description: new Text('Описание', 'Description')
      },
      load: false,
      loadId: false,
      errMessage: '',
      idMessage: '',
      period: {
        begin: '',
        end: ''
      }
    }
  },
  watch:{
    note(v){
      this.timeNote = v
      this.setPeriod()
    }
  },
  methods:{
    ...mapActions(['setTimeNote', 'checkTimeNoteId', "getTimeNote", 'getServerErrorMessage']),
    setPeriod(){
      try {
        this.period = {
          begin: new Date(this.note?.period?.begin?._seconds * 1000).toISOString().split('T')[0],
          end: new Date(this.note?.period?.end?._seconds * 1000).toISOString().split('T')[0]
        }
      }
      catch (e) {
        this.period = {
          begin: new Date().toISOString().split('T')[0],
          end: new Date().toISOString().split('T')[0]
        }
      }
    },
    async checkId(){
      this.loadId = true
      try {
        this.idMessage = await this.checkTimeNoteId(this.timeNote.id)? 'Id is not free': 'Id is free'
      }
      catch (e) {
        this.errMessage = await this.getServerErrorMessage(e)
      }
      this.loadId = false
    },
    async refresh(){
      this.load = true
      try {
        this.timeNote = await this.getTimeNote(this.timeNote.id)
        this.setPeriod()
        this.errMessage = ''
      }
      catch (e) {
        this.errMessage = this.getServerErrorMessage(e)
      }
      this.load = false
    },
    async saveTimeNote(){
      this.load = true
      try {
        await this.setTimeNote({
          ...this.timeNote,
          period: this.period,
          education: this.edu,
          experience: this.exp,
          new: undefined
        })
        this.timeNote.new = false
        this.$emit('saved', this.timeNote)
      }
      catch (e) {
        this.errMessage = await this.getServerErrorMessage(e)
      }
      this.load = false
    }
  },
  created() {
    this.timeNote = this.note
    this.setPeriod()
  }
}
</script>

<style scoped>
.time-note{
  padding: 0.5em 1em;
  margin: 1em 0;
}
.time-note__title{
  text-transform: capitalize;
  font-size: 1.2em;
  color: var(--v-accent-base);
}
.time-note__place{
  text-transform: capitalize;
  font-weight: 200;
  color: var(--v-secondary-lighten5)
}
.time-note__period{
  margin: .5em 0;
  font-weight: 700;
  font-size: 1.2em;
}
.time-note__description{
  font-style: italic;
}
</style>
