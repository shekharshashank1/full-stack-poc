var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	created: {
		type: Date,
		Default: Date.now
	},
	title: {
		type: String,
		trim: true,
		required: true,
		default: ''
	},
	content: {
		type: String,
		trim: true,
		default: ''
	},
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Article', ArticleSchema);