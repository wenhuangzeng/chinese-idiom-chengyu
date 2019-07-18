const WORD_PINYIN_MAP = require(__dirname + '/parse.js').WORD_PINYIN_MAP;
const WORD_DEFINITION_MAP = require(__dirname + '/parse.js').WORD_DEFINITION_MAP;
const Util = require(__dirname + '/util.js')

/**
 * Return a list of idiom word-pinyin-pairs, word, or pinyin that starts with the parameter character.
 * @param {string} character 
 * @param {Object} options
 */
const startWithCharacter = function(character, options = {word: true, pinyin: true}) {
    if (!options.word && !options.pinyin) {
        throw "Invalid options values"
    } else {
        let idioms = []
        for (let pair of WORD_PINYIN_MAP) {
            if (character === pair[0].split('')[0]) idioms.push(pair)
        }
        return filterWordPinyinPairs(idioms, options)
    }
};

/**
 * Return a list of idiom word-pinyin-pairs, word, or pinyin that starts with the parameter pinyin.
 * @param {string} character 
 * @param {Object} options
 */
const startWithTonePinyin = function(pinyin, options = {word: true, pinyin: true}) {
    if (!options.word && !options.pinyin) {
        throw "Invalid options values"
    } else {
        let idioms = []
        for (let pair of WORD_PINYIN_MAP) {
            if (pinyin === pair[1].split(' ')[0]) idioms.push(pair)
        }
        return filterWordPinyinPairs(idioms, options)
    }
};

/**
 * Return a list of idiom word-pinyin-pairs, word, or pinyin that starts with the parameter no-tone pinyin.
 * @param {string} character 
 * @param {Object} options
 */
const startWithNoTonePinyin = function(noTonePinyin, options = {word: true, pinyin: true}) {
    if (!options.word && !options.pinyin) {
        throw "Invalid options values"
    } else {
        let idioms = []
        for (let pair of WORD_PINYIN_MAP) {
            if (noTonePinyin === Util.pinyinToLetters(pair[1].split(' ')[0])) idioms.push(pair)
        }
        return filterWordPinyinPairs(idioms, options)
    }
};

/**
 *  Filter the list of idiom word-pinyin-pairs.
 * @param {string} idioms 
 * @param {Object} options 
 */
const filterWordPinyinPairs = function(idioms, options = {word: true, pinyin: true}) {
    if (options.word && !options.pinyin) return idioms.map(idiom => idiom[0])
    if (!options.word && options.pinyin) return idioms.map(idiom => idiom[1])
    return idioms
}

/**
 * Return the definition of an idiom word
 * @param {string} idiomWord 
 */
const getDefinition = function(idiomWord) {
    if (WORD_DEFINITION_MAP.has(idiomWord)) {
        return WORD_DEFINITION_MAP.get(idiomWord)
    } else {
        throw "Idiom does not exist in the database!"
    }
}

module.exports = {
    startWithCharacter,
    startWithTonePinyin,
    startWithNoTonePinyin,
    getDefinition
}
