const mongoose = require('mongoose');
const photoSchema = mongoose.Schema({
    photo: {
        type:Buffer
    }
});

photoSchema.methods.toJSON = function() {
    const result = this.toObject();
    delete result.photo;
    return result;
};

const Photo = mongoose.model('photo', PhotoSchema);

module.exports = photo;