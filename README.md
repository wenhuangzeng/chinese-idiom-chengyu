# Chinese Idioms Chengyu
Simple npm package that contains utilities for Chinese idioms or [Chengyu](https://en.wikipedia.org/wiki/Chengyu). Functions available right now are for Chinese idioms solitaire or [Chengyu Jielong](http://dictionary.pinpinchinese.com/definitions/s/%E6%88%90%E8%AF%AD%E6%8E%A5%E9%BE%99-chengyujielong). More functions will be added in the future versions!

## Installation
```bash
npm install chinese-idioms-chengyu
```

## Usage
### Functions
| Name | Params | Description | Error handling |
| ---- | ------ | ----------- | -------------- | 
| `nextIdiomsWithMatchingCharacter` | `idiomWord` - Chinese characters of the idiom | Returns a list of idiom word-pinyin-pairs that have idioms where the first character is the same as the last character of the parameter `idiomWord`. | Throw an error when `idiomWord` does not exist.
| `nextIdiomsWithMatchingTonePinyin` | `idiomWord` - Chinese characters of the idiom | Returns a list of idiom word-pinyin-pairs that have idioms where the pinyin of the first character is the same as the pinyin of the last character of the parameter `idiomWord`. | Throw an error when `idiomWord` does not exist.
| `nextIdiomsWithMatchingNoTonePinyin` | `idiomWord` - Chinese characters of the idiom | Returns a list of idiom word-pinyin-pairs that have idioms where the pinyin of the first character is the same as the pinyin of the last character of the parameter `idiomWord` disregarding the tone. | Throw an error when `idiomWord` does not exist.

### Example
```bash
const chengyu = require('chinese-idioms-chengyu')

const idiom = '全力以赴' // [ '全力以赴' : 'quán lì yǐ fù' ]
const lessIdioms = chengyu.nextIdiomsWithMatchingCharacter('全力以赴')
console.log(lessIdioms.length)
console.log(lessIdioms[0])

const moreIdioms = chengyu.nextIdiomsWithMatchingNoTonePinyin('全力以赴')
console.log(moreIdioms.length)
console.log(moreIdioms[0])
```
### Output
```bash
2
[ '赴汤蹈火', 'fù tāng dǎo huǒ' ]
347
[ '夫倡妇随', 'fū chàng fù suí' ]
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledge
[chinese-xinhua](https://github.com/pwxcoo/chinese-xinhua)

