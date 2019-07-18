const fs = require('fs');

/**
 * FOR DEVELOPMENT PURPOSE ONLY.
 * Used to generate new JSON data files.
 * !!! ONCE FINISHED WITH PRODUCING ALL NECESSARY JSON DATA, WILL BE DELETED !!!
 */
function parseIdioms() {
    fs.readFile(__dirname + '/../data/idiom.json', (err, fileContents) => {
        if (err) {
          console.error(err)
        } else {
          try {
              const data = JSON.parse(fileContents)
              let wordPinyinPairs = {}
              for (let idiom of data) {
                  wordPinyinPairs[idiom.word] = idiom.pinyin
              }
              fs.writeFile(__dirname + '/../data/WordPinyinPairs.json', JSON.stringify(wordPinyinPairs), 'utf8', (err) => {
                if (err) console.error(err)
              });
            } catch(err) {
              console.error(err);
            }
        }
        
    })
}

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

module.exports = { WORD_PINYIN_MAP }