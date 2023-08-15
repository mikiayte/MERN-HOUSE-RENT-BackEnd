import mongoose, {mongo } from "mongoose";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://mikaayta:mikaayta@mikiasketema.yydobmk.mongodb.net/MERNHOUSERENT?retryWrites=true&w=majority');
       
        console.log(`MOngodb connected: ${conn.connection.host}`)
    }
    catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

export default connectDB