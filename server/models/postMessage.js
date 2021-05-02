import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
	creator: String,
	title: {
		type: String,
		default: 'none'

	},
	message: String,
	tags: [String],

	likeCount: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
	selectedFile: String,
});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
