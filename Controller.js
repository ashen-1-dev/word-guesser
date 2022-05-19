import WordService from "./WordService.js";

class Controller {
    async start(req, res) {
        await WordService.start()
        res.render('index')
    }

    async check(req, res) {
        var result = await WordService.check(req.body.suggestedWord)
        res.render('index', {result: result})
    }
}

export default new Controller()