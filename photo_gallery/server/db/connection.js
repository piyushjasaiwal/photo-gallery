const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.0:27017/photo_gallery',{
    useNewUrlParser: true
    // useUnifiedTopology:true
});