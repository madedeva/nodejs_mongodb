const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/LoginSignUp', {
}).then(() => {
    console.log('connection successful')
}).catch((e) => {
    console.log('no connection')
})

const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// const ProductSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     }
// })

// const product = new mongoose.model('Product', ProductSchema)
const collection = new mongoose.model('Collection1', LogInSchema)

module.exports = collection
// module.exports = product