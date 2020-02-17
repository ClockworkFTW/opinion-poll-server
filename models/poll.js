const mongoose = require("mongoose");

const minOptions = val => val.length >= 2;

const pollSchema = new mongoose.Schema({
	link: { type: String },
	title: { type: String, required: true },
	author: { type: String, default: "guest" },
	options: {
		type: [{ type: String }],
		validate: [minOptions, "poll must have at least two options"]
	},
	votes: [{ type: Number }]
});

const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;
