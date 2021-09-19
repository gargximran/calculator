const HistoryModel = require('../db/models/HistoryModel')

module.exports = async (req, res) => {
    const num1 = parseFloat(req.fields.firstNumber);
    const num2 = parseFloat(req.fields.secondNumber);

    const sum = num1 + num2
    const returnObject = {
        firstNumber: num1,
        secondNumber: num2,
        sum
    }
    try{
        await HistoryModel.create(returnObject)
        const allData = await HistoryModel.find({}).sort({'created_at': -1})
        res.send(allData)
    }catch (e) {
        res.send(e)
    }

}