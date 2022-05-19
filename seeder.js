import mongoose from "mongoose";
import dotenv from 'dotenv'
import Word from './Word.js'


dotenv.config()

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.evkqc.mongodb.net/?retryWrites=true&w=majority`)

const seedWords = [
    {name: 'Тузик'},
    {name: 'Апостроф'} ,
    {name: 'Магистраль'},
    {name: 'Дорога'},
    {name: 'Ключ'},
    {name: 'Идея'},
    {name: 'Свежесть'}
]

const seed = async () => {
    await Word.deleteMany({})
    await Word.insertMany(seedWords)
}

seed().then(() => {
    mongoose.connection.close()
    console.log("db seeded")
})
