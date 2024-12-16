import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://preetmutha757:90258140@cluster0.lhmvq.mongodb.net/food-del?retryWrites=true&w=majority').then(()=>console.log("DB Connected"));
   
}
 

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.