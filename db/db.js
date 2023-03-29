import mongoose from 'mongoose';
 console.log(process.env.MONGODBURL)
export const dbConnection = async () => {
  mongoose.set('strictQuery', false)
  const mongooseConnect = await mongoose.connect(process.env.MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  if (mongooseConnect) {
    console.log('Connected to Database')
  } else {
    console.log('Not Connected to Database')
  }
}