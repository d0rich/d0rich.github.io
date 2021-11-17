<template>
  <div class="js-object border-light--primary">
    <span v-if="object.name">{{name}} = </span>{
    <div v-for="(value, key, index) in object" :key="key" class="js-object__field" >
      <span class="key">{{key}}</span>: <span class="value">{{value}}</span><span class="comma" v-if="index < Object.keys(object).length - 1">,</span>
    </div>
    }
  </div>
</template>

<script>
export default {
name: "JSObjectWindow",
  props: {
		name: {
			type: String,
			required: true
		},
    object: {
      type: Object,
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
