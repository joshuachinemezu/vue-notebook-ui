<template>
  <div :class="[
   'note-area--' + type,
   'note-area-margin--' + type,
  ]">
    <textarea
      :class="[
    'note-area-content--' + type,
    ]"
      :placeholder="placeholder"
      :value="content"
      :style="{ color: color, }"
    ></textarea>
  </div>
</template>

<script>
import "./css/EmptyLined.css";
import "./css/EmptyLinedColored.css";
import "./css/Texture.css";

export default {
  name: "notebook-ui",
  props: {
    type: {
      type: String,
      default: "EmptyLined",
      validator(x) {
        return ["EmptyLined", "EmptyLinedColored", "Texture"].indexOf(x) !== -1;
      }
    },
    color: {
      type: String,
      default: "mediumblue"
    },
    placeholder: { default: "Write note here" },
    content: { default: "Wow" }
  },
  methods: {}
};
</script>

<style>
</style>