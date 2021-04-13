const express = require("express");
const env = require("dotenv"); 
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const cors = require("cors");

//environment variable
env.config();

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
//mongoDB connection
//mongodb+srv://root:<password>@cluster0.to93b.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(`your localDB link`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(()=>{
        console.log("database connected");
});

app.use(cors());
app.use(express.json()); //middleware (reacts between post and get req)
app.use(express.static(path.join(__dirname, 'uploads')));
app.use('/api', authRoutes); // middleware
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);


app.listen(process.env.PORT, ()=> {
    console.log(`Our Server is started at ${process.env.PORT}`);
});
