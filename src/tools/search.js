const WORD_PINYIN_MAP = require(__dirname + '/parse.js').WORD_PINYIN_MAP;
const Util = require(__dirname + '/util.js')

/**
 * Return a list of idiom word-pinyi-pairs that starts with the parameter character.
 * @param {string} character 
 */
const startWithCharacter = function(character) {
    let idioms = []
    for (let pair of WORD_PINYIN_MAP) {
        if (character === pair[0].split('')[0]) idioms.push(pair)
    }
    return idioms
};

/**
 * Return a list of idiom word-pinyi-pairs that starts with the parameter pinyin.
 * @param {string} character 
 */
const startWithTonePinyin = function(pinyin) {
    let idioms = []
    for (let pair of WORD_PINYIN_MAP) {
        if (pinyin === pair[1].split(' ')[0]) idioms.push(pair)
    }
    return idioms
};

/**
 * Return a list of idiom word-pinyi-pairs that starts with the parameter no-tone pinyin.
 * @param {string} character 
 */
const startWithNoTonePinyin = function(noTonePinyin) {
    let idioms = []
    for (let pair of WORD_PINYIN_MAP) {
        if (noTonePinyin === Util.pinyinToLetters(pair[1].split(' ')[0])) idioms.push(pair)
    }
    return idioms
};

module.exports = {
    startWithCharacter,
    startWithTonePinyin,
    startWithNoTonePinyin
}
