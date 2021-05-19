import mongoose from 'mongoose';

const userSchema = mangoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required,
	},
	password: {
		type: String,
		required: true,
	},
	id: {
		type: String,
	},
});

export default mongoose.model('User', userSchema);