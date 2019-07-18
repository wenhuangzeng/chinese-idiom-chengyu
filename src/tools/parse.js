const fs = require('fs');

/**
 * Convert Object from JSON to a Javascript Map object.
 * @param {Object} object 
 */
function jsonObjToMap(object) {
    let map = new Map();
    try {
        for (let word of Object.keys(object)) {
            map.set(word, object[word])
        }

    } catch(err) {
        console.error(err);
    }
    return map;
}

const WORD_PINYIN_MAP = jsonObjToMap(JSON.parse(fs.readFileSync(__dirname + '/../data/WordPinyinPairs.json'), 'utf8'));
const WORD_DEFINITION_MAP = jsonObjToMap(JSON.parse(fs.readFileSync(__dirname + '/../data/WordDefinitionPairs.json'), 'utf8'));

module.exports = { WORD_PINYIN_MAP, WORD_DEFINITION_MAP }