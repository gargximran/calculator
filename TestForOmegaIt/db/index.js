const mongoose = require('mongoose')


const connectDB = async () => {
    if(mongoose.connections[0].readyState){

        return console.log('DB connected!')

    }else{
        try{
            await mongoose.connect(process.env.MONGODB_URL + '/' + process.env.DB_NAME, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            });
            return console.log('DB connected!')
        }catch (e) {
            return console.log(e)
        }

    }
}

module.exports = connectDB
