const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/PokerHandDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, 
(error, response) => {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log("run mongodb://localhost:27017/PokerHandDb");
});