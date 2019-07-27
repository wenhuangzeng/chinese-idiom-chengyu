# Chinese Idioms Chengyu
Simple npm package that contains utilities for Chinese idioms or [Chengyu](https://en.wikipedia.org/wiki/Chengyu). Functions available right now are for Chinese idioms solitaire or [Chengyu Jielong](http://dictionary.pinpinchinese.com/definitions/s/%E6%88%90%E8%AF%AD%E6%8E%A5%E9%BE%99-chengyujielong). More functions will be added in the future versions!

## Installation
```bash
npm install chinese-idioms-chengyu
```

## Usage
### Solitaire Functions
| Name | Params | Description | Error handling |
| ---- | ------ | ----------- | -------------- | 
| `nextIdiomsWithMatchingCharacter` | `idiomWord` - String of Chinese characters of the idiom <br> `options` - return idioms as word-pinyin-pairs, words, or pinyin | Returns a list of idiom word-pinyin-pairs, words, or pinyin that have idioms where the first character is the same as the last character of the parameter `idiomWord`. | Throw an error when `idiomWord` does not exist.
| `nextIdiomsWithMatchingTonePinyin` | `idiomWord` - String of Chinese characters of the idiom <br> `options` - return idioms as word-pinyin-pairs, words, or pinyin | Returns a list of idiom word-pinyin-pairs, words, or pinyin that have idioms where the pinyin of the first character is the same as the pinyin of the last character of the parameter `idiomWord`. | Throw an error when `idiomWord` does not exist.
| `nextIdiomsWithMatchingNoTonePinyin` | `idiomWord` - String of Chinese characters of the idiom <br> `options` - return idioms as word-pinyin-pairs, words, or pinyin | Returns a list of idiom word-pinyin-pairs, words, or pinyin that have idioms where the pinyin of the first character is the same as the pinyin of the last character of the parameter `idiomWord` disregarding the tone. | Throw an error when `idiomWord` does not exist.


### Search Functions
| Name | Params | Description | Error handling |
| ---- | ------ | ----------- | -------------- | 
| `startWithCharacter` | `character` - String of first character of the idiom <br> `options` - return idioms as word-pinyin-pairs, words, or pinyin | Return a list of idiom word-pinyin-pairs, word, or pinyin that starts with the parameter `character`. | Throw an error when `options` is not valid.
| `startWithTonePinyin` | `pinyin` - String of pinyin of first character of the idiom <br> `options` - return idioms as word-pinyin-pairs, words, or pinyin | Return a list of idiom word-pinyin-pairs, word, or pinyin that starts with the parameter `pinyin`. | Throw an error when `options` is not valid.
| `startWithNoTonePinyin` | `noTonePinyin` - String of no tone pinyin of first character of the idiom <br> `options` - return idioms as word-pinyin-pairs, words, or pinyin | Return a list of idiom word-pinyin-pairs, word, or pinyin that starts with the parameter `noTonEpinyin`. | Throw an error when `options` is not valid.
| `getDefinition` | `idiomWord` - String of idiom word | Return the definition of the parameter `idiomWord` | Throw an error when `idiomWord` does not exist. |

### Options
| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| `word` | Boolean | true | Whether returned idioms include the string of words |
| `pinyin` | Boolean | true | Whether returned idioms include the string of pinyin |

### Example
```bash
const chengyu = require('chinese-idioms-chengyu')

const idiom = '全力以赴' // [ '全力以赴' : 'quán lì yǐ fù' ]
const lessIdioms = chengyu.nextIdiomsWithMatchingCharacter(idiom)
console.log(lessIdioms.length)
console.log(lessIdioms[0])

const wordOnly = chengyu.nextIdiomsWithMatchingCharacter(idiom, {word: true, pinyin: false})
console.log(wordOnly[0])

const moreIdioms = chengyu.nextIdiomsWithMatchingNoTonePinyin(idiom)
console.log(moreIdioms.length)
console.log(moreIdioms[0])

const pinyinOnly = chengyu.nextIdiomsWithMatchingNoTonePinyin(idiom, {word: false, pinyin: true})
console.log(pinyinOnly[0])


```
### Output
```bash
2
[ '赴汤蹈火', 'fù tāng dǎo huǒ' ]
赴汤蹈火
347
[ '夫倡妇随', 'fū chàng fù suí' ]
fū chàng fù suí
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledge
[chinese-xinhua](https://github.com/pwxcoo/chinese-xinhua)

