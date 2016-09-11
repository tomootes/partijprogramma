var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	partijnaam: String,
	gekozenMaatregelen: [{ omzet: Number, title: String}]
});

module.exports = mongoose.model('Program', schema);