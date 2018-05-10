'use babel';

import { CompositeDisposable } from 'atom';

const grammarScopes = [
  'source.hcl',         // language-hcl
  'source.embedded.hcl' // language-markdown
];

export default {
  disposables: null,

  provideGrammar () {
    function checkComments () {
      return atom.config.get('linter-spell-hcl.checkComments');
    }

    return [{
      grammarScopes: grammarScopes,
      checkedScopes: {
        'source.hcl': true,
        'source.embedded.hcl': true,
        'comment.line.double-slash.hcl': checkComments,
        'comment.block.hcl': checkComments,
        'comment.line.pound.hcl': checkComments
      }
    }];
  },

  provideDictionary () {
    let wordList = require('linter-spell-word-list');
    let a = new wordList.ConfigWordList({
      name: 'HCL',
      keyPath: 'linter-spell-hcl.words',
      grammarScopes: grammarScopes
    });
    this.disposables.add(a);
    return a.provideDictionary();
  },

  activate () {
    this.disposables = new CompositeDisposable();
    require('atom-package-deps').install('linter-spell-hcl')
      .then(() => {
        console.log('All dependencies installed, good to go');
      });
  },

  deactivate () {
    this.disposables.dispose();
  }
};
