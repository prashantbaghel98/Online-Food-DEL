import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("DB Connected")
    })
}

  
// import mongoose from "mongoose";


// export const connectDB = async()=>{
//   await mongoose.connect('mongodb://127.0.0.1:27017/food-del').then(()=>{
//     console.log("DB Connected")
//   })

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }