import NotebookUi from './NotebookUi.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-notebook-ui', NotebookUi);
  }
};
