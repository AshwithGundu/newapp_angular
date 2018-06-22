var mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb+srv://admin:admin@cluster0-cv9ns.mongodb.net/test?retryWrites=true')
.then(
    res=>{
        console.log('DB Connected')
    },
    err=>{
        console.log('Error')
    }
);