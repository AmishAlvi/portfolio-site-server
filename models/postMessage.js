import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    selectedFile: String,
    gitURL: {
        type: String,
        required: 'URL can\'t be empty',
        unique: true
    },
    deploymentURL: {
        type: String,
        required: 'URL can\'t be empty',
        unique: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;