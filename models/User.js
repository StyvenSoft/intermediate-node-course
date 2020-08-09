const mongoose = require('mongoose');

const UserSchema = User.mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unicode: true,
    password: { type: String, require: true }  }
});

module.exports= mongoose.model('User', UserSchema);
