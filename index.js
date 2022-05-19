import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const DB_CONNECTION = 'mongodb+srv://HollyOne:qazqaz123@cluster0.evkqc.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
const app = new express();

app.use('/public', express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use('/', router)

app.set('view engine', 'pug');
app.set("views",  "./views");

async function startApp() {
    try {
        await mongoose.connect(DB_CONNECTION)
        app.listen(PORT, () => console.log('SERVER STARTED PORT: ' + PORT));
    } catch (e) {
        console.log(e)
    }

}

startApp()