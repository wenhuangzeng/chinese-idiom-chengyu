const WORD_PINYIN_MAP = require(__dirname + '/parse.js').WORD_PINYIN_MAP;
const Util = require(__dirname + '/util.js')
const Search = require(__dirname + '/search.js')

/**
 * Returns a list of idiom word-pinyin-pairs that can match with the parameter idiom word.
 * The acceptable idioms are ones in which the first character is the same as the last 
 * character of the parameter idiomWord.
 * @param {String} idiomWord 
 */
const nextIdiomsWithMatchingCharacter = function(idiomWord) {
    if (WORD_PINYIN_MAP.has(idiomWord)) {
        return Search.startWithCharacter(idiomWord[idiomWord.length - 1])
    } else {
        throw "Idiom does not exist in the database!"
    }
};


/**
 * Returns a list of idiom word-pinyin-pairs that can match with the parameter idiom word.
 * The acceptable idioms are ones in which the pinyin of the first character is the same as
 * the pinyin of the last character of the parameter idiomWord.
 * @param {String} idiomWord 
 */
const nextIdiomsWithMatchingTonePinyin = function(idiomWord) {
    if (WORD_PINYIN_MAP.has(idiomWord)) {
        const pinyinArray = WORD_PINYIN_MAP.get(idiomWord).split(' ')
        return Search.startWithTonePinyin(pinyinArray[pinyinArray.length - 1])
    } else {
        throw "Idiom does not exist in the database!"
    }
};

/**
 * Returns a list of idiom word-pinyin-pairs that can match with the parameter idiom word.
 * The acceptable idioms are ones in which the pinyin of the first character is the same as
 * the pinyin of the last character of the parameter idiomWord disregarding the tone.
 * @param {String} idiomWord 
 */
const nextIdiomsWithMatchingNoTonePinyin = function (idiomWord) {
    if (WORD_PINYIN_MAP.has(idiomWord)) {
        const pinyinArray = WORD_PINYIN_MAP.get(idiomWord).split(' ')
        return Search.startWithNoTonePinyin(Util.pinyinToLetters(pinyinArray[pinyinArray.length - 1]))
    } else {
        throw "Idiom does not exist in the database!"
    }
};


module.exports = {
    nextIdiomsWithMatchingTonePinyin,
    nextIdiomsWithMatchingCharacter,
    nextIdiomsWithMatchingNoTonePinyin
}