import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const houseSchema = mongoose.Schema({
    houseId: {
        type:String,
        required: true
    },
    renterId: {
        type:String,
        required: true
    },
    
    rentEnds:{
        type:Date()
    }

}, {
     timestamps:true
})




const House = mongoose.model('House',houseSchema);
export default House;    