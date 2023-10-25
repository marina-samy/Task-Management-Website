const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        enum: ['today', 'week', 'important', 'personal', 'work', 'learning', 'deadline', 'fitness', 'birthday', 'other'],
        required: true
    }
}, { timestamps: true })


const todo = mongoose.model('todo', TodoSchema);

module.exports = todo ;