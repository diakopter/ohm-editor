/* eslint-env browser */
/* global CheckedEmitter, Vue */

'use strict';

var ohmEditor = require('./ohmEditor');

var semanticsContainer = ohmEditor.semanticsContainer = new CheckedEmitter();
semanticsContainer.registerEvents({
  'create:inputBox': [],
  'toggle:semanticsButton': ['inputBox'],
  'show:suggestions': ['prefix'],
  'hide:suggestions': [],
  'create:editor': ['type', 'id'],
  'select:suggestion': ['key'],
  'highlight:suggestion': ['index'],
  'save:semantics': [],
  'hover:resultBlock': ['classId', 'shouldHighlight']
});

semanticsContainer.vue = new Vue({
  el: '#semanticsContainer',
  components: {
    'semantics-header': require('./components/semantics-header.vue'),
    'semantics-buttons': require('./components/semantics-buttons.vue'),
    'semantics-body': require('./components/semantics-body.vue')
  },
  template: [
    '<div id="semanticsContainer" v-bind:style="styleObj">',
    ' <semantics-header></semantics-header>',
    ' <semantics-buttons></semantics-buttons>',
    ' <semantics-body></semantics-body>',
    '</div>'
  ].join(''),
  data: {
    styleObj: {flexGrow: '1'}
  },
  mounted: function() {
    ohmEditor.addListener('parse:grammar', function(matchResult, grammar, error) {
      if (grammar && grammar.defaultStartRule) {
        ohmEditor.semantics.value = grammar.createSemantics();
      }
    });
  }
});