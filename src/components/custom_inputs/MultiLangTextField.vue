<template>
  <div style="width: 100%">
    <div class="mb-2">{{label}}</div>
    <div v-if="!textarea" style="width: 100%">
      <v-text-field :value="value.ru" @input="ruInput"
                    label="Русский" autocomplete="off"
                    :loading="loading"
                    :outlined="outlined" :dense="dense" />
      <v-text-field :value="value.en" @input="enInput"
                    label="English" autocomplete="off"
                    :loading="loading"
                    :outlined="outlined" :dense="dense" />
    </div>
    <div v-else style="width: 100%">
      <v-textarea :value="value.ru" @input="ruInput"
                  auto-grow style="width: 100%"
                  label="Русский" autocomplete="off"
                  :loading="loading"
                  :outlined="outlined" :dense="dense" />
      <v-textarea :value="value.en" @input="enInput"
                  auto-grow style="width: 100%"
                  label="English" autocomplete="off"
                  :loading="loading"
                  :outlined="outlined" :dense="dense" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: Object,
    textarea: Boolean,
    outlined: Boolean,
    dense: Boolean,
    loading: Boolean
  },
  name: "multi-lang-text-field",
  methods: {
    ruInput($event){
      this.$emit('input', { en: this.value.en, ru: $event })
    },
    enInput($event){
      this.$emit('input', { en: $event, ru: this.value.ru })
    }
  }
}
</script>

<style scoped>

</style>
