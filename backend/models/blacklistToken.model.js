const mongoose = require('mongoose');
const { create, createIndexes } = require('./user.model');

const blacklistTokenSchema = new mongoose.Schema({
    token : {
        type : String ,
        required : true,
        unique : true
    },
    createdAt : {
        type : Date ,
        default : Date.now,
        expires : 86400
    }
});

const BlacklistToken = mongoose.models.blacklistToken || mongoose.model('blacklistToken', blacklistTokenSchema);

module.exports = BlacklistToken;