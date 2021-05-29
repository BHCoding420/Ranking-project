const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const postRouter = require('./routes/posts');
const reviewRouter = require('./routes/reviews');

app.use('/posts', postRouter);
app.use('/reviews', reviewRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 

/*app.get('/',(req,res) => {
    res.send("working");
});*/