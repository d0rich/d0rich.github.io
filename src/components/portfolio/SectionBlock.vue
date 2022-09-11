<template>
  <v-card :to="to" class="github-card">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4 github-card__status transition-swing">
          {{status}}
        </div>
        <v-list-item-title class="mb-1">
          <h2>{{name}}</h2>
        </v-list-item-title>
        <v-list-item-subtitle class="text" v-text="description"/>
      </v-list-item-content>

      <v-list-item-avatar tile color="primary" size="80"
                          class="github-card__icon transition-swing">
        <v-icon x-large>{{icon}}</v-icon>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "SectionBlock",
  props: {
    to: String,
    status: {
      type: String,
      default: 'PARSED'
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: 'mdi-github'
    },

  }
}
</script>

<style scoped>
.github-card{
  text-decoration: none;
}

.github-card__status{
  text-align: right;
  white-space: nowrap;
  padding-right: 100%;
  animation: status-turn-off ease-in-out .3s;
}
.github-card:hover .github-card__status{
  padding-right: 0;
  animation: status-turn-on ease-in-out .3s;

  color: var(--v-primary-base);
}
.github-card:hover .github-card__icon{
  transform: scale(.7);
}
@keyframes status-turn-on {
  0% { filter: drop-shadow( 0 0 0 var(--v-accent-base)) }
  50% { filter: drop-shadow( -50px 0 1px var(--v-accent-base))  }
  100% { filter: drop-shadow( 0 0 0 var(--v-accent-base)) }
}
@keyframes status-turn-off {
  0% { filter: drop-shadow( 0 0 0 var(--v-accent-base)) }
  50% { filter: drop-shadow( 50px 0 1px var(--v-accent-base))  }
  100% { filter: drop-shadow( 0 0 0 var(--v-accent-base)) }
}
</style>