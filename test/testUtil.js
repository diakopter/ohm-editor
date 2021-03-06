'use strict';

// --------------------------------------------------------------------
// Imports
// --------------------------------------------------------------------

var ohm = require('ohm-js');

// --------------------------------------------------------------------
// Private stuff
// --------------------------------------------------------------------

function makeGrammar(source, optNamespace) {
  if (Array.isArray(source)) {
    source = source.join('\n');
  }
  return ohm.grammar(source, optNamespace);
}

function makeGrammars(source, optNamespace) {
  if (Array.isArray(source)) {
    source = source.join('\n');
  }
  return ohm.grammars(source, optNamespace);
}

// --------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------

module.exports = {
  makeGrammar: makeGrammar,
  makeGrammars: makeGrammars
};
