/**
 * Helper function to normalize string of pinyin with accented letters.
 * @param {String} pinyin 
 */
const pinyinToLetters = function(pinyin) {
    return pinyin.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

module.exports = {
    pinyinToLetters
}