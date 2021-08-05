<template>
  <div>
    <v-row no-gutters>
      <v-btn icon tile @click="editor.chain().focus().toggleBold().run()"
             :color="editor.isActive('bold') ? 'accent': 'white'" >
        <v-icon> mdi-format-bold </v-icon>
      </v-btn>
      <v-btn icon tile @click="editor.chain().focus().toggleItalic().run()"
             :color="editor.isActive('italic') ? 'accent': 'white'" >
        <v-icon> mdi-format-italic </v-icon>
      </v-btn>
      <v-btn icon tile @click="editor.chain().focus().toggleStrike().run()"
             :color="editor.isActive('strike') ? 'accent': 'white'" >
        <v-icon> mdi-format-strikethrough </v-icon>
      </v-btn>
      <v-btn class="mr-5" icon tile @click="editor.chain().focus().setHardBreak().run()">
        <v-icon> mdi-format-page-break </v-icon>
      </v-btn>
      <v-btn icon tile @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
             :color="editor.isActive('heading', { level: 1 }) ? 'accent': 'white'" >
        <v-icon> mdi-format-header-1 </v-icon>
      </v-btn>
      <v-btn class="mr-5" icon tile @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
             :color="editor.isActive('heading', { level: 2 }) ? 'accent': 'white'" >
        <v-icon> mdi-format-header-2 </v-icon>
      </v-btn>
      <v-btn icon tile @click="setLink"
             :color="editor.isActive('link') ? 'accent': 'white'" >
        <v-icon> mdi-link </v-icon>
      </v-btn>
      <v-btn class="mr-5" icon tile @click="editor.chain().focus().unsetLink().run()">
        <v-icon> mdi-link-off </v-icon>
      </v-btn>
      <v-btn icon tile @click="editor.chain().focus().toggleBulletList().run()"
             :color="editor.isActive('bulletList') ? 'accent': 'white'" >
        <v-icon> mdi-format-list-bulleted </v-icon>
      </v-btn>
      <v-btn icon tile @click="editor.chain().focus().toggleOrderedList().run()"
             :color="editor.isActive('orderedList') ? 'accent': 'white'" >
        <v-icon> mdi-format-list-numbered </v-icon>
      </v-btn>
    </v-row>
    <editor-content class="editor article-content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import Link from '@tiptap/extension-link'
import StarterKit from '@tiptap/starter-kit'

export default {
  name: "HtmlEditor",
  components: {
    EditorContent
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      editor: null,
    }
  },
  methods: {
    setLink() {
      const url = window.prompt('URL')

      this.editor
          .chain()
          .focus()
          .extendMarkRange('link')
          .setLink({ href: url })
          .run()
    },
  },

  watch: {
    value(value) {
      const isSame = this.editor.getHTML() === value
      if (isSame) {
        return
      }
      this.editor.commands.setContent(this.value, false)
    },
  },
  created() {
    this.editor = new Editor({
      extensions: [
        StarterKit, Link
      ],
      content: this.value,
      onUpdate: () => {
        this.$emit('input', this.editor.getHTML())
      },
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss" scoped>
.editor{
  color: white;
}
</style>
<style>
.ProseMirror{
  border: white 1px solid;
  border-radius: 5px;
  padding: .5rem;
}
</style>
