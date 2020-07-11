<template>
  <div style="position: absolute; z-index: 5">
      <div class="blocker blocked"></div>
      <div class='appl-form'>
            <div class="ServiceInfo">
              <span> {{FormData.serv}}: {{SelectedService}}</span>
            </div>
            <div class="TZarea">
              <textarea  v-model="Application.Message" :placeholder="FormData.messageph">
              </textarea>
            </div>
            <div class="MoreInfo">
              <div class='references'>
                <div>
                  <p>{{FormData.refp1}}</p>
                  <p>{{FormData.refp2}}</p>
                  <p>{{FormData.refp3}}</p>
                </div>
                <div>{{FormData.reflist}}:</div>
                <transition-group name="slide-fade">
                  <div class="delRef" v-for="(ref, index) in Application.References" :key="index">
                    <span>{{(index+1)+': '}}<a :href="ref.link" target="_blank">{{ref.description}}</a></span>
                    <div class="button" @click="DelRef(index)">X</div>
                  </div>
                </transition-group>
                <input v-model="newRef.description" :placeholder="FormData.refph1"/>
                <input v-model="newRef.link"  :placeholder="FormData.refph2"/>
                <div class="button" v-if="AddRefButton" @click="AddRef()">
                    {{FormData.add}}
                </div>
              </div>
              <div class='contacts'>
                <div>
                  <p>{{FormData.conp1}}</p>
                </div>
                <div>{{FormData.conlist}}:</div>
                <transition-group name="slide-fade">
                  <div class="contact" v-for="(contact, index) in Application.Contacts" :key="index">
                    <div class="CKindCol"><span>{{contact.Kind}}</span></div> 
                    <div class="inputCol"><input v-model="contact.Contact" :placeholder="FormData.conph1"/></div>
                    <div class="button" @click="DelContact(index)">X</div>
                  </div>
                </transition-group>
                <div class="addContact">
                  <select v-model="selectedContactKind">
                    <option v-for="(kind, index) in ContactKinds" :key="index">{{kind}}</option> 
                  </select>
                  <div class="button" v-if="AddContactButton" @click="AddContact()">
                    {{FormData.add}}
                  </div>
                </div>
              </div>
            </div>
            <div style="display: flex; flex-direction: row; width:100%">
              <div class="button" style="width:50%" @click="$emit('close-form')">
                  {{FormData.close}}...
              </div>
              <div class="button" style="width:50%" @click="SendForm()">
                  {{FormData.send}}...
              </div>
            </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
    name: "Form",
    props: ['SelectedService'],
    data(){
      return{
        selectedContactKind: 'email',
        newRef: {link:'', description:''},
        ContactKinds:[
          'vk',
          'watsapp',
          'viber',
          'telegram',
          'email'
        ],
        Application:{
          Service: this.SelectedService,
          Message:'',
          References: [],
          Contacts: []
        }
      }
    },
    computed:{
      AddContactButton(){
        if ( this.Application.Contacts.length < 5 )
        return true;
        else return false;
      },
      AddRefButton(){
        if ( this.Application.References.length < 10 )
        return true;
        else return false;
      },
      FormData(){
        if(this.$route.params.lan == 'ru')
        return {
          serv: 'Услуга',
          messageph:'Поясните, что вы хотите сделать',
          refp1: 'Есть ли такие источники, которые вдохновили вас на создание данного продукта?',
          refp2: 'Либо вы просто хотели бы позаимствовать интересные идеи откуда-то?',
          refp3: 'Оставьте ссылку на эти продукты в списке ниже и кратко опишите, что именно вам в них приглянулось.',
          reflist: 'Список референсов',
          refph1:'Описание',
          refph2:'Ссылка',
          conp1: 'Ну и конечно, оставьте контакты для обратной связи ; )',
          conlist: 'Список контактов',
          conph1:'Введите контакт для связи',
          add: 'Добавить',
          send: 'Отправить',
          close: 'Закрыть'
        };
        else return {
          serv: 'Услуга',
          messageph:'Поясните, что вы хотите сделать',
          refp1: 'Есть ли такие источники, которые вдохновили вас на создание данного продукта?',
          refp2: 'Либо вы просто хотели бы позаимствовать интересные идеи откуда-то?',
          refp3: 'Оставьте ссылку на эти продукты в списке ниже и кратко опишите, что именно вам в них приглянулось.',
          reflist: 'Список референсов',
          refph1:'Описание',
          refph2:'Ссылка',
          conp1: 'Ну и конечно, оставьте контакты для обратной связи ; )',
          conlist: 'Список контактов',
          conph1:'Введите контакт для связи',
          add: 'Добавить',
          send: 'Отправить',
          close: 'Закрыть'
        };
      }
    },
    methods:{
        AddRef(){
          if(this.newRef.link != '' && this.newRef.description != '')
          this.Application.References.push({link:this.newRef.link, description:this.newRef.description});
        },
        DelRef(index){
          this.Application.References.splice(index,1);
        },
        AddContact(){
          this.Application.Contacts.push({Kind: this.selectedContactKind, Contact:''});
        },
        DelContact(index){
          this.Application.Contacts.splice(index,1);
        },
        SendForm(){
            axios
              .post(this.$data.ServerLink +'/send-application/', this.Application )
              .then(response =>{
                console.log(response);
              })
              .catch(error => {
                console.log(error);
                })
        }
    }

})
</script>

<style scoped>
::-webkit-input-placeholder {color:#d88c68;}
.appl-form{
  position: fixed;
  z-index: 5;
  top: 15vh;
  left: calc(50%-250px);
  width:80%;
  min-width: 325px;
  max-width: 500px;
  height: 70vh;
  padding: 3%;
  background-color: var(--color4);
  border-style: solid;
  border-width: 4px;
  border-radius: 8px;
  border-color: var(--color1);
  color: var(--color3);
  overflow: auto;
}
@media (max-width:600px) {
  .appl-form{
    left: 3vw;
  }
}
.appl-form .button{
  font-weight: bold;
  text-align: center;
  padding:5px;
  color: var(--color4);
  border-style: solid;
  border-color: var(--color4);
  border-radius: 10px;
  border-width: 2px;
  background-color: var(--color3);
  user-select: none;
  transition: ease 0.1s;
}
.appl-form .button:hover{
  cursor: pointer;
  color: var(--color5);
  border-color: var(--color5);
  background-color: var(--color2);
}
.ServiceInfo{
  text-align: center;
  font-size:x-large;
}
.contacts .button, .references .button{
  font-size:small;
}
.TZarea{
  margin-left:auto;
  margin-right: auto;
  margin-top: 15px;
  width:80%;
}
.TZarea textarea{
  font-family: 'Comfortaa';
  font-size:medium;
  font-weight: bold;
  width: 100%;
  height: 300px;
  padding: 10px;
  resize: none;
  border-radius: 8px;
  border-style: solid;
  border-width: 3px;
  border-color: var(--color3);
  background-color: var(--color2);
  color: var(--color5);
}
.MoreInfo{
  margin-left:auto;
  margin-right: auto;
  margin-top: 15px;
  width: 80%;
  display: flex;
  flex-direction: column;
}

.MoreInfo select{
  font-family: 'Comfortaa';
  font-weight: bold;
  border-radius: 5px;
  border-style:solid;
  border-width:medium;
  border-color: var(--color1);
  background-color: var(--color2);
  color: var(--color5);
}
.MoreInfo input{
  font-family: 'Comfortaa';
  border-radius: 5px;
  border-style:solid;
  border-width:medium;
  border-color: var(--color1);
  background-color: var(--color2);
  color: var(--color5);
  margin: 0px 5px 5px 0px;
  
}
.contacts{
  width:100%;
  padding: 5px;
}
.addContact{
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  max-width: 90%;
}
.contacts .CKindCol{
  width: 30%;
  padding: 5px 0 5px 0;
}
.contacts .inputCol{
  width:60%;
}
.contacts input{
  margin:5px 0 5px 0;
}
.contact{
  display: flex;
  flex-direction: row;
}
.references{
  width:100%;
  padding: 5px;
}
.references a{
  color: var(--color5);
}
.delRef{
  display:flex;
  flex-direction: row;
}
.delRef span{
  padding: 5px;
}
.blocker{
    position: fixed;
    z-index: 4;
    height: 100vh;
    width:100vw;
    top:0vh;
    left:-100vw;
    background-color: rgba(0, 0, 0, 0.5);
    transition: ease 0.2s;
}
.blocker.blocked{
    height: 100vh;
    width:100vw;
    top:0vh;
    left:0vw;
    background-color: rgba(0, 0, 0, 0.5);
    transition: ease 0.2s;
}
</style>