<template>
  <div>
    <div class="btns">
      <v-btn v-for="resume in resumes" :key="resume.id"
          class="mx-3" exact text :to="{name: 'Resume', params: { resumeId: resume.id }}" >
        {{resume.spec.text}}
      </v-btn>
    </div>
    <router-view />
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: "ResumeIndex",
  computed:{
    ...mapState({
      resumes: state => state.resume.resumeCollection
    })
  },
  methods: {
    ...mapActions(["getAllResume"])
  },
  async created() {
    await this.getAllResume()
    if (!this.$route.params.resumeId)
      await this.$router.replace({ name: 'Resume', params: { resumeId: this.resumes[0].id } })
  }
}
</script>

<style scoped>
.btns{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 2rem;
}
</style>
