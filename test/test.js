const chengyu = require(__dirname + '/../src/index.js');

console.log(chengyu.nextIdiomsWithMatchingCharacter('全力以赴'))
console.log(chengyu.nextIdiomsWithMatchingNoTonePinyin('全力以赴', {word: false, pinyin: true}))
console.log(chengyu.nextIdiomsWithMatchingTonePinyin('全力以赴', {word: true, pinyin: false}))
console.log(chengyu.getDefinition('全力以赴'))
console.log(chengyu.startWithCharacter('全'))
console.log(chengyu.startWithTonePinyin('quán'))
console.log(chengyu.startWithNoTonePinyin('quan'))