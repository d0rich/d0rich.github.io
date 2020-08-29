<template>
  <div style="position: absolute; z-index: 5">
      <div class="blocker blocked"></div>
      <div class='appl-form'>
            <div class="ServiceInfo">
              <span> {{FormData.serv}}: {{SelectedService}}</span>
            </div>
            <p class="MoreInfo">{{FormData.messahep}}</p>
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
                <p v-if="refErrorBool" class="errors">{{FormData.refError}}</p>
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
              <div>
                <p>{{FormData.namep}}</p>
                <input style="width:100%; margin-bottom: 15px;" v-model="Application.Orderer" :placeholder="FormData.nameph"/>
              </div>
            </div>
            <div v-if="errorsBool && Errors.length != 0" class="errors">
              <p>{{FormData.errorMessage}}</p>
              <ul>
                <li v-for="(error, index) in Errors" :key="index">
                  {{error}}
                </li>
              </ul>
            </div>
            <div style="display: flex; flex-direction: row; width:100%">
              <div class="button" style="width:50%" @click="CloseForm()">
                  {{FormData.close}}.
              </div>
              <div :class="{button: true, disabled:formSended}" style="width:50%" @click="SendForm()">
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
        formSended: false,
        selectedContactKind: 'E-mail',
        refErrorBool: false,
        errorsBool: false,
        newRef: {link:'', description:''},
        ContactKinds:[
          'E-mail',
          'Telegram',
          'VK',
          'WatsApp',
          'Viber'
        ],
        Application:{
          Service: this.SelectedService,
          Message:'',
          References: [],
          Contacts: [],
          Orderer: ''
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
          messahep: 'Мы уже близко к сотрудничеству :). Опишите ниже вкратце продукт, который вы хотели бы заказать.',
          messageph:'Поясните, какой продукт вы в итоге хотите получить.',
          refp1: 'Есть ли такие источники, которые вдохновили вас на создание данного продукта?',
          refp2: 'Либо вы просто хотели бы позаимствовать интересные идеи откуда-то?',
          refp3: 'Оставьте ссылку на эти продукты в списке ниже и кратко опишите, что именно вам в них приглянулось.',
          reflist: 'Список референсов',
          refph1:'Описание',
          refph2:'Ссылка',
          refError: 'Ошибка: введите описание и ссылку на источник',
          conp1: 'Ну и конечно, оставьте контакты для нашей дальнейшей связи ; )',
          conlist: 'Список контактов',
          conph1:'Введите контакт для связи',
          add: 'Добавить',
          namep: 'Впишите, пожалуйста, своё имя, чтобы мы знали как вас зовут.',
          nameph: 'Впишите своё имя сюда',
          errorMessage: 'Пожалуйста, исправьте следующие ошибки:',
          send: 'Отправить',
          close: 'Закрыть'
        };
        else return {
          serv: 'Service',
          messahep: 'We are already close to partnership :). Describe briefly the product you would like to order.',
          messageph:'Describe the product you want.',
          refp1: 'Are there any sources that inspired you to create this product?',
          refp2: 'Or you just like to borrow interesting ideas from somewhere?',
          refp3: 'Leave links to these products in the list below and briefly describe what exactly you liked about them.',
          reflist: 'Reference list',
          refph1:'Description',
          refph2:'Link',
          refError: 'Error: enter description and link to source',
          conp1: 'And of course, leave contacts for our further communication ; )',
          conlist: 'Contact list',
          conph1:'Enter your contact',
          add: 'Add',
          namep: 'Please write your name beacause we need to know that.',
          nameph: 'Enter your name here',
          errorMessage: 'Please correct the following errors:',
          send: 'Send',
          close: 'Close'
        };
      },
      Errors(){
        const errors = [];
        let ru = false;
        if (this.$route.params.lan == 'ru')
          ru = true;
        if (this.Application.Message == ''){
          if (ru) errors.push('Объясните, какой продукт вы хотите получить');
          else errors.push('Describe the product you want');
        }
        if (this.Application.Contacts.filter(c => c.Contact != '').length == 0){
          if (ru) errors.push('Укажите хотя бы 1 контакт для связи');
          else errors.push('Please provide at least 1 contact for communication');
        }
        if (this.Application.Orderer == ''){
          if (ru) errors.push('Напишите, как вас зовут');
          else errors.push('Write your name');
        }
        return errors;
      }
    },
    methods:{
        AddRef(){
          if(this.newRef.link != '' && this.newRef.description != ''){
            this.Application.References.push({link:this.newRef.link, description:this.newRef.description});
            this.refErrorBool = false;
          }
          else this.refErrorBool = true;
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
        CloseForm(){
          this.$emit('close-form');
        },
        SendForm(){
          if(!this.formSended){
            if (this.Errors.length == 0){
            this.errorsBool = false;
            this.formSended = true;
            axios
              .post(this.$data.ServerLink +'/send-application/', this.Application )
              .then(res =>{
                if (res.status==200){
                  if(this.$route.params.lan == 'ru'){
                    alert(`Ваша заявка успешно отправлена ; ) \nБудем рады сотрудничеству с вами, ${this.Application.Orderer}`);
                  }
                  else{
                    alert(`Your application has been sent successfully ; ) \nLooking forward to working with you, ${this.Application.Orderer}`);
                  }
                  this.$emit('close-form');
                }
                else{
                  this.formSended = false;
                  if(this.$route.params.lan == 'ru'){
                    alert('Упс :(, что-то пошло не так. Попробуйте отослать заявку позже.');
                  }
                  else{
                    alert('Oops :(, something went wrong. Try to send the application later.');
                  }
                  
                }
                  
              })
              .catch(error => {
                console.log(error);
                })
            }
            else this.errorsBool = true;
          }
          
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
.button.disabled{
  color: var(--color5);
  border-color: var(--color5);
  background-color: var(--color2);
}
.button.disabled:hover{
  cursor: default;
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
.errors{
  color: #b32652;
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