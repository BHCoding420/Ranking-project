const mongoose = require('mongoose');




const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const reviewSchema = new Schema({
  
  username: {
    type: String,
    required: true,
    trim: true
   
    
  },
  comment: { type: String  }, 
  post_id: { type: mongoose.Schema.Types.ObjectId, required:true },
  score: {type: Number, required:true },
  date: { type: Date, default: Date.now }, 
  

}, {
  timestamps: true,
}); 

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
    
  }, 
  creator: {
    type: String,
    required: true,
    trim: true
   
    
  },
  description: { type: String, required: true },
  score: {type: Number, required:true },
  date: { type: Date, default: new Date() }, 
  reviews: [{}],

}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);
const Review = mongoose.model('Review', reviewSchema);

exports.Post = Post;  
exports.Review = Review;
 