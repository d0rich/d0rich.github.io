<template>
  <div>
    Resume
    <div class="hidden">
      <div class="skills-group">
        <Stats class="w-96"
              :values="[5, 3, 2, 3, 4]" 
              :titles="['REST', 'GraphQL', 'Message Queues', 'SOAP', 'gRPC']">
          <template #icon-1>
            <Icon class="w-full h-full" name="vscode-icons:file-type-rest" />
          </template>
          <template #icon-2>
            <Icon class="w-full h-full" name="logos:graphql" />
          </template>
          <template #icon-3>
            <Icon class="w-full h-full" name="logos:rabbitmq-icon" />
          </template>
          <template #icon-4>
            <Icon class="w-full h-full" name="vscode-icons:file-type-apib" />
          </template>
          <template #icon-5>
            <Icon class="w-full h-full" name="vscode-icons:file-type-protobuf" />
          </template>
        </Stats>
        <Card mode="homepage-skills">
          <CardTitle>Integration</CardTitle>
          <p>
            Knowing multiple programming languages makes it easier to learn new technologies quickly. 
            The fundamental concepts are similar, allowing for easy recognition of similarities and 
            differences between languages. This continuous learning makes you a more versatile programmer.
          </p>
        </Card>
      </div>
      <div class="skills-group">
        <Stats class="w-96"
              :values="[5, 4, 3, 1, 2]" 
              :titles="['SQL', 'NoSQL', 'NewSQL', 'Machine Learning', 'Natural Language']">
          <template #icon-1>
            <Icon class="w-full h-full" name="vscode-icons:file-type-sql" />
          </template>
          <template #icon-2>
            <Icon class="w-full h-full" name="vscode-icons:file-type-json" />
          </template>
          <template #icon-3>
            <Icon class="w-full h-full" name="logos:surrealdb-icon" />
          </template>
          <template #icon-4>
            <Icon class="w-full h-full" name="logos:tensorflow" />
          </template>
          <template #icon-5>
            <Icon class="w-full h-full" name="vscode-icons:file-type-elastic" />
          </template>
        </Stats>
        <Card mode="homepage-skills">
          <CardTitle>Data</CardTitle>
          <p>
            Knowing multiple programming languages makes it easier to learn new technologies quickly. 
            The fundamental concepts are similar, allowing for easy recognition of similarities and 
            differences between languages. This continuous learning makes you a more versatile programmer.
          </p>
        </Card>
      </div>

    </div>
  </div>
</template>

<script lang="ts">

export default defineComponent({
  setup(){
    useHead({
      title: 'Resume'
    })
  }
})

</script>