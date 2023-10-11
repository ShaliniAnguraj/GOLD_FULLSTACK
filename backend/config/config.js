import mongoose from "mongoose"
import colors from "colors"

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `Mongodb DataBase Connected! ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`error: ${error.message}`.bgRed.white);
  }
};

export default connectDB;