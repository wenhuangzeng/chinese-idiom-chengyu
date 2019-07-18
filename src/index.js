const { nextIdiomsWithMatchingTonePinyin, nextIdiomsWithMatchingCharacter, nextIdiomsWithMatchingNoTonePinyin } = require('./tools/solitaire.js');
const {startWithCharacter, startWithTonePinyin, startWithNoTonePinyin, getDefinition, } = require('./tools/search.js');

module.exports = {
    nextIdiomsWithMatchingCharacter,
    nextIdiomsWithMatchingTonePinyin,
    nextIdiomsWithMatchingNoTonePinyin,
    startWithCharacter,
    startWithTonePinyin,
    startWithNoTonePinyin,
    getDefinition
}