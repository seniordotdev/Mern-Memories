import mongoose from "mongoose";

const postSchema = mongoose.Schema({
	title: String,
	message: String,
	creator: String,
	name: String,
	tags: [String],
	selectedFile: String,
	comments: { type: [String], default: [] },
	likeCount: {
		type: [String],
		default: [],
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

var PostMessage = mongoose.model("postmessages", postSchema);

export default PostMessage;
