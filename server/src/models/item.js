import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({  //name, title, description, email, location, time, category
    message: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    selectedFile: {
        type: String,
        default: '',
    },
    filter: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default: []
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Comments',
        default: []
    },
},{timestamps: true})

export default mongoose.model("Item", itemSchema);