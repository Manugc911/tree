'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    userName: String,
    wins: Number,
    totalGames: Number,
    pass: String
})

module.exports = mongoose.model('User',UserSchema);