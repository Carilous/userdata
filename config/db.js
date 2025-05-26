const mongoose = require('mongoose');
const CLOUD_DB = "mongodb+srv://carilous:9F8eRmFIEgA9ZfJC@cluster0.r30f6bo.mongodb.net/user-data?retryWrites=true&w=majority&appName=Cluster0";



mongoose.connect(CLOUD_DB).then(() => {
    console.log('Database connected successfully')
}).catch((err) => {
    console.error('Database connection failed:'+err)
});

module.exports = mongoose;