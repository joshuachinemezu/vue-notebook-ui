/*!
 * vue-notebook-ui v0.0.2
 * (c) Joshua Chinemezu
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styleInject = _interopDefault(require('../node_modules/style-inject/dist/style-inject.es.js'));
var __vue_normalize__ = _interopDefault(require('vue-runtime-helpers/dist/normalize-component.js'));

var css = ".note-area--EmptyLined.note-area-margin--EmptyLined > textarea {\n  padding-left: 55px;\n  overflow: auto;\n  resize: vertical;\n  display: block;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  width: 90%;\n  height: 300px;\n  background-clip: padding-box;\n  font: normal 14px verdana;\n  line-height: 1.5;\n  min-width: 80%;\n  min-height: 250px;\n  border: solid 1px #fff;\n  -webkit-appearance: textarea;\n  background-color: white;\n  -webkit-rtl-ordering: logical;\n  flex-direction: column;\n  resize: auto;\n  cursor: text;\n  white-space: pre-wrap;\n  overflow-wrap: break-word;\n  border-width: 0px;\n}\n\n.note-area--EmptyLined > textarea {\n  background-image: -webkit-linear-gradient(\n    rgba(162, 162, 162, 0.26) 0.1em,\n    transparent 0.1em\n  );\n  background-image: linear-gradient(\n    rgba(162, 162, 162, 0.26) 0.1em,\n    transparent 0.1em\n  );\n  background-size: 100% 20px;\n  background-color: transparent !important;\n  line-height: 20px;\n  margin-top: 5px;\n  padding: 0;\n  padding-bottom: 1px;\n}\n\n.note-area--EmptyLined.note-area-margin--EmptyLined {\n  position: relative;\n}\n\n.note-area--EmptyLined > textarea:hover,\n.note-area--EmptyLined > textarea:active,\n.note-area--EmptyLined > textarea:focus {\n  outline: 0px !important;\n  -webkit-appearance: none;\n}\n.note-area--EmptyLined.note-area-margin--EmptyLined:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 45px;\n  width: 5px;\n  background-color: rgba(255, 152, 0, 0.5);\n}\n";
styleInject(css);

var css$1 = ".note-area--EmptyLinedColored.note-area-margin--EmptyLinedColored > textarea {\n  padding-left: 110px;\n  overflow: auto;\n  resize: vertical;\n  display: block;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  background: url(http://i.stack.imgur.com/ynxjD.png) repeat-y;\n  width: 68%;\n  width: 68%;\n  height: 300px;\n  background-clip: padding-box;\n  font: normal 14px verdana;\n  line-height: 1.5;\n  /* padding: 2px 10px; */\n  min-width: 68%;\n  min-height: 250px;\n  border: solid 1px #fff;\n  -webkit-appearance: textarea;\n  background-color: white;\n  -webkit-rtl-ordering: logical;\n  flex-direction: column;\n  resize: auto;\n  cursor: text;\n  white-space: pre-wrap;\n  overflow-wrap: break-word;\n  border-width: 0px;\n}\n\n.note-area--EmptyLinedColored > textarea {\n  background-image: -webkit-linear-gradient(\n    rgba(162, 162, 162, 0.26) 0.1em,\n    transparent 0.1em\n  );\n  background-image: linear-gradient(\n    rgba(162, 162, 162, 0.26) 0.1em,\n    transparent 0.1em\n  );\n  background-size: 100% 20px;\n  background-color: transparent !important;\n  line-height: 20px;\n  margin-top: 5px;\n  padding: 0;\n  padding-bottom: 1px;\n}\n\n.note-area--EmptyLinedColored.note-area-margin--EmptyLinedColored {\n  position: relative;\n}\n\n.note-area--EmptyLinedColored > textarea:hover,\n.note-area--EmptyLinedColored > textarea:active,\n.note-area--EmptyLinedColored > textarea:focus {\n  outline: 0px !important;\n  -webkit-appearance: none;\n}\n.note-area--EmptyLinedColored.note-area-margin--EmptyLinedColored:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 10px;\n  width: 5px;\n  /* background-color: rgba(255, 152, 0, 0.5); */\n}\n";
styleInject(css$1);

var css$2 = "@import url(https://fonts.googleapis.com/css?family=Roboto);\n@import url(https://fonts.googleapis.com/css?family=Handlee);\n\n.note-area--Texture {\n  position: relative;\n  width: 90%;\n  max-width: 800px;\n  min-width: 400px;\n  height: 390px;\n  margin: 0 auto;\n  background: #fafafa;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n.note-area--Texture:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 60px;\n  background: radial-gradient(#575450 6px, transparent 7px) repeat-y;\n  background-size: 30px 30px;\n  border-right: 3px solid #d44147;\n  box-sizing: border-box;\n}\n\n.note-area--Texture > textarea {\n  width: 100%;\n  max-width: 100%;\n  min-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  line-height: 30px;\n  padding: 0 10px;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: mediumblue;\n  font-family: \"Handlee\", cursive;\n  font-weight: bold;\n  font-size: 18px;\n  box-sizing: border-box;\n  z-index: 1;\n\n  position: absolute;\n  top: 30px;\n  right: 0;\n  bottom: 30px;\n  left: 60px;\n  background: linear-gradient(transparent, transparent 28px, #91d1d3 28px);\n  background-size: 30px 30px;\n}\n";
styleInject(css$2);

//
var script = {
  name: "notebook-ui",
  props: {
    type: {
      type: String,
      "default": "EmptyLined",
      validator: function validator(x) {
        return ["EmptyLined", "EmptyLinedColored", "Texture"].indexOf(x) !== -1;
      }
    },
    color: {
      type: String,
      "default": "mediumblue"
    },
    fontStyle: {
      type: String,
      "default": "\"Handlee\", cursive"
    },
    placeholder: {
      "default": "Write note here"
    },
    content: {
      "default": ""
    },
    customStyle: {
      type: Object
    }
  },
  methods: {}
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    "class": ['note-area--' + _vm.type, 'note-area-margin--' + _vm.type]
  }, [_c('textarea', {
    "class": ['note-area-content--' + _vm.type],
    style: _vm.customStyle ? _vm.customStyle : {
      color: _vm.color,
      'font-family': _vm.fontStyle
    },
    attrs: {
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.content
    }
  })]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

var NotebookUi = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

var index = {
  install: function install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("notebook-ui", NotebookUi);
  }
};

module.exports = index;
