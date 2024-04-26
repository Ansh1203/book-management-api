import express from "express";
import bookRoute from "./routes/book.js";
import {connectDB} from "./db.js";
import bodyParser from "body-parser";
import userRoute from "./routes/user.js";

const app = express();

app.use(express.json());

app.use("/books", bookRoute);
app.use("/user", userRoute);

connectDB();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send('API is working');
});


app.listen(port, ()=>{
    console.log('Server is running on port', port);
});