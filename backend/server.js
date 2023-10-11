import  express  from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import colors from "colors"

//imports
import connectDB from "./config/config.js";
import userRoutes from "./routes/userRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";


//dotenv config
dotenv.config();

//middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


//routes
app.use("/api/users", userRoutes);

app.use(notFound)
app.use(errorHandler)
app.use(bodyParser.json()); 

const port = process.env.PORT || 8800;
connectDB().then(() => {
    app.get("/", (req, res) => {
        res.send("<h1>Hello From Node Server vai nodemon</h1>");
      });
      app.get("/test", (req, res) => {
        res.send("<h1>test data from the backend</h1>");
      });
    try {
        app.listen(port, () => {
            console.log(`Server Running on ${process.env.NODE_ENV} on port no ${process.env.PORT}`.bgGreen.blue);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})
