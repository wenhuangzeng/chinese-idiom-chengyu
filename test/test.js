const { nextIdiomsWithMatchingTonePinyin, nextIdiomsWithMatchingCharacter, nextIdiomsWithMatchingNoTonePinyin } = require(__dirname + '/../src/tools/solitaire.js');

console.log(nextIdiomsWithMatchingNoTonePinyin('全力以赴').length)
console.log(nextIdiomsWithMatchingNoTonePinyin('全力以赴')[0])