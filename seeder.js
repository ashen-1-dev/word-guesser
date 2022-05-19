import mongoose from "mongoose";
import Word from './Word.js'

mongoose.connect('mongodb+srv://HollyOne:qazqaz123@cluster0.evkqc.mongodb.net/?retryWrites=true&w=majority')

const seedWords = [
    {name: 'Тузик'},
    {name: 'Апостроф'} ,
    {name: 'Магистраль'},
    {name: 'Дорога'},
    {name: 'Ключ'},
    {name: 'Идея'}
]

const seed = async () => {
    await Word.deleteMany({})
    await Word.insertMany(seedWords)
}

seed().then(() => {
    mongoose.connection.close()
    console.log("db seeded")
})
