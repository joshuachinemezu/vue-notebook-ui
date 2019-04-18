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
      :style="customStyle ? customStyle : {color: color, 'font-family': fontStyle }"
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
    fontStyle: {
      type: String,
      default: `"Handlee", cursive`
    },
    placeholder: { default: "Write note here" },
    content: { default: "" },
    customStyle: {
      type: Object
    }
  },
  methods: {}
};
</script>

<style>
</style>