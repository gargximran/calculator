const mongoose = require('mongoose')

const history = new mongoose.Schema(
    {
        firstNumber: {
            required: true,
            type: Number
        },
        secondNumber: {
            required: true,
            type: Number
        },
        sum: {
            required: true,
            type: Number
        }
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

const HistoryModel = mongoose.models.History || mongoose.model('History', history)


module.exports = HistoryModel
