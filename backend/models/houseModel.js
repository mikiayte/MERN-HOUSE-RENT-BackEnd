import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const houseSchema = mongoose.Schema({
    type: {
        type:String,
        required: true
    },
    story : {
        type:Number, 

    },
    city: {
        type:String,
        required: true
    },
    location: {
        type:String
    },
    price: {
        type:Number, 
        required: true
    },
    bedRooms:{
        type:String
    }
    , 
    houseImagePath: [
    ], 
    description: {
        type:String,
    }, 
    rentalPlan: {
        type: String, 
        required:true
    },
    likes: [{
        id: {
            type:String
        } ,
        notification: {
            type:Boolean
        }
    }],
     
    rentRequest: [
        {
            renterId: {
                     type:String
                     } ,
            phone:{
                     type:String
                    }
    }
    ]


}, {
     timestamps:true
})




const House = mongoose.model('House',houseSchema);
export default House;    
