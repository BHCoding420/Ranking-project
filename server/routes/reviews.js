const router = require('express').Router();
const { rawListeners } = require('../models/post.model');
let PostModel = require('../models/post.model');

let Review = PostModel.Review;

router.route('/').get((req, res) => {
  Review.find()
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json('Error: ' + err));
}); 

router.route('/add').post((req, res) => {
    const review = req.body;
    


    const newReview = new Review(review);
  
    newReview.save()
    .then(() => res.json(newReview))
    .catch(err => res.status(400).json('Error: ' + err));
  }); 

  router.route('/:id').get((req, res) => {
    Review.findById(req.params.id)
      .then(review => res.json(review))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Review.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').patch( async (req, res,next) => 
  {
    try {
      const id = req.params.id; 
      const updates = req.body; 
      const options = { new:true}; 

      const result = await Review.findByIdAndUpdate(id,updates,options); 
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
      
      
  } 
  )
   
    

  module.exports = router; 
  