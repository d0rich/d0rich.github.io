<template>
  <layout>
    <article>

      <section class="intro">
        <div class="intro__info">
          <h1>
            {{$page.resume.content.main.first_name}} {{$page.resume.content.main.second_name}} - {{$page.resume.content.main.spec}}
          </h1>
          <p>{{$page.resume.content.main.text}}</p>
          <address class="contacts">
            <div class="contact__title">Phone</div>
            <div class="contact__info">
              <a :href="`tel:${$page.resume.content.contacts.phone}`">
                {{$page.resume.content.contacts.phone}}
              </a>
            </div>
            <div class="contact__title">Email</div>
            <div class="contact__info">
              <a :href="`mailto:${$page.resume.content.contacts.email}`" target="_blank" >
                {{$page.resume.content.contacts.email}}
              </a>
            </div>
            <div class="contact__title">Address</div>
            <div class="contact__info">{{$page.resume.content.contacts.address}}</div>
            <div class="contact__title">Social</div>
            <div>
              <v-btn icon :href="`https://github.com/${$page.resume.content.contacts.social.github}`" target="_blank" >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn icon :href="`https://t.me/${$page.resume.content.contacts.social.telegram}`" target="_blank" >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn icon :href="`https://vk.com/${$page.resume.content.contacts.social.bk}`" target="_blank" >
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </div>
          </address>
        </div>
        <div class="intro__photo">
          <v-img class="border-light--primary"
                 eager
                 width="100vw"
                 max-width="15rem"
                 min-width="100px" min-height="100px"
                 :src="$page.resume.content.main.photo"
                 alt="Nikolay Dorofeev"/>
        </div>
      </section>

      <div class="hr" />

      <section class="skills">
        <div class="block__column--text skills__description">
          <h2>Skills</h2>
          <p>{{$page.resume.content.skills.text}}</p>
        </div>
        <div class="block__column--items skills__skills-notes">
          <skills-block v-for="field in $page.resume.content.skills.fields" :key="field.name"
                       :skills-field="field" />
        </div>
      </section>

      <div class="hr" />

      <section class="block">
        <div class="block__column--text">
          <h2>Work Experience</h2>
        </div>
        <div class="block__column--items time-notes">
          <exp-block v-for="(exp, index) in $page.workExp.edges" :key="index"
                     :exp-note="exp.node" />
        </div>
      </section>

      <div class="hr" />

      <section class="block">
        <div class="block__column--text">
          <h2>Education</h2>
          <p>{{$page.resume.content.education.text}}</p>
        </div>
        <div class="block__column--items time-notes">
          <exp-block v-for="(exp, index) in $page.resume.content.education.history" :key="index"
                     :exp-note="exp" />
        </div>
      </section>

    </article>
  </layout>
</template>

<page-query>
query Resume($path: String!){
  resume: resume( path: $path){
    id
    path
    image
    content {
      main {
        photo
        first_name
        second_name
        spec
        text
      }
      contacts {
        phone
        email
        address
        social {telegram github vk}
      }
      skills {
        text
        fields { name items }
      }
      education {
        text
        history {
          spec
          place
          date {
            begin
            end
          }
          description
        }
      }
    }
  }
  workExp: allWorkExperience (sortBy: "date.end", order: DESC) {
    edges {
      node {
        spec
        place
        date {
          begin
          end
        }
        description
      }
    }
  }
}
</page-query>

<script>
import ExpBlock from "../components/resume/ExpBlock";
import SkillsBlock from "../components/resume/SkillsBlock";
export default {
  name: "Resume",
  components: { ExpBlock, SkillsBlock }
}
</script>

<style scoped lang="scss">

.intro{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.intro__info{
  margin-right: 2rem;
  max-width: 700px;

}
.contacts{
  display: grid;
  grid-template-columns: 2fr 5fr;
  align-items: center;
}
.contact__title{
  font-weight: bold;
  text-transform: uppercase;
}
.contact__info a{
  color: inherit;
  text-decoration: underline;
}
.intro__photo{
  display: flex;
  justify-content: center;
  align-items: center;
}
.block{
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.block__column--text{
  margin-right: 2em;
}
.block__column--items{
  display: flex;
  flex-direction: column;
}
section.skills{
  display: grid;
  grid-template-columns: 1fr 3fr;
}
.skills__skills-notes{
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.time-notes{
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 900px) {
  .intro{
    flex-direction: column-reverse;
  }
  .block{
    display: flex;
    flex-direction: column;
  }
  .block__column--text{
    width: unset;
  }
}
</style>
