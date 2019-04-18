<template>
  <div>
    <notebook-ui
      :customStyle="{color:`mediumblue`, 'text-decoration': 'bold'}"
      content="This is amazing"
      placeholder="Write your notes here"
      type="Texture"
      color="red"
    ></notebook-ui>
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