import Word from "./Word.js";
import {getRandomInt, getRandomProperty} from "./helper.js";

let attempts = 0;
const hints_type = {WORD_LENGTH: 'word_length', SHOW_LETTER: 'show_letter', BULLY: 'bully'}

class WordService {
    trueWord;
    async check(suggestedWord) {
        if(typeof suggestedWord !== 'string' || suggestedWord === '') {
            return 'Ты ничего не ввел..'
        }
        attempts++;
        suggestedWord = this._format(suggestedWord)
        if(suggestedWord === this.trueWord) {
            await this.start()
            return 'Молодец! Ты угадал! Загадываю новое слово...'
        }
        if(attempts > 3)
            return 'Нет. ' + await this.showHint(suggestedWord)
        return 'Нет'
    }

    async showHint(suggestedWord) {
        var hint
        let randomHint = getRandomProperty(hints_type)
        if(hints_type.WORD_LENGTH === randomHint)
            hint = await this.compareLength(suggestedWord)
        if(hints_type.SHOW_LETTER === randomHint) {
            hint = await this.showRandomLetter()
        }
        if(hints_type.BULLY === randomHint)
            hint = 'Ну что так долго, мне уже надоело'

        return hint
    }

     async compareLength(suggestedWord) {
        const trueWordLength = await this.trueWord.length
        if(trueWordLength > suggestedWord.length)
            return 'Загаданноее слово больше'
        if(trueWordLength === suggestedWord.length)
            return 'Слова имееют одинаковую длину'
        return 'Загаданноее слово меньшe'
    }

     async showRandomLetter() {
        let random = getRandomInt(1, await this.trueWord.length)
        return random + ' буква: \'' + this.trueWord.charAt(random - 1) + '\'';
    }

     _format(word) {
         return word.toLowerCase().replace(/\s/g, '');
        }


    async getRandomWord() {
        try {
            const count = await Word.count();
            const random = Math.floor(Math.random() * count);
            const word = await Word.findOne().skip(random)
            return word.name
        } catch (e) {
            console.log(e)
        }

    }

    async start() {
        this.trueWord = await this.getRandomWord();
        console.log(this.trueWord)
        this.trueWord = this._format(this.trueWord);
    }
}

export default new WordService()