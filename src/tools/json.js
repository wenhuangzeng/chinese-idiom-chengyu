/**
 * Used to generate new smaller JSON data files from idiom.json when needed
 */
const fs = require('fs');

function parseIdioms() {
    fs.readFile(__dirname + '/../data/idiom.json', (err, fileContents) => {
        if (err) {
          console.error(err)
        } else {
          try {
              const data = JSON.parse(fileContents)
              let wordDefinitionPairs = {}
              for (let idiom of data) {
                wordDefinitionPairs[idiom.word] = idiom.explanation
              }
              fs.writeFile(__dirname + '/../data/WordDefinitionPairs.json', JSON.stringify(wordDefinitionPairs), 'utf8', (err) => {
                if (err) console.error(err)
              });
            } catch(err) {
              console.error(err);
            }
        }
    })
}

parseIdioms()