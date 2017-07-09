var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var MovieSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		trim: true,
		default: ''
	},
	added: {
		type: Date,
		Default: Date.now
	},
	addedBy: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Movie', MovieSchema);
