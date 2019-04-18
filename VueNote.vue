<template>
  <div>
    <notebook-ui
      :customStyle="{color:`orange`, 'text-decoration': 'bold'}"
      content="Amazing"
      placeholder="This is it"
      type="Texture"
      color="red"
    >Wow</notebook-ui>
  </div>
</template>

<script>
import NotebookUi from "./src/NotebookUi";
export default {
  components: {
    NotebookUi
  }
};
</script>