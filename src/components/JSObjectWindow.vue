<template>
  <div class="js-object border-light--primary">
    <span v-if="object.name">{{object.name.text}} = </span>{
    <div v-for="(field, index) in object.fields" :key="index" class="js-object__field" >
      <span class="key">{{field.key.text}}</span>: <span class="value">{{field.value.text}}</span><span class="comma" v-if="index < object.fields.length - 1">,</span>
    </div>
    }
  </div>
</template>

<script>
import {JSObject} from "@/classes";

export default {
name: "JSObjectWindow",
  props: {
    object: {
      type: JSObject,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.js-object{
  padding: 1rem 2rem;
  background-color: rgba(0,0,0, .9);
}
.js-object__field{
  padding-left: 1rem;
  .key{
    color: var(--v-primary-lighten2);
  }
  .value{

  }
  .comma{
    color: var(--v-warning-lighten1);
  }
}
</style>
