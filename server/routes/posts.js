const router = require('express').Router();
const { rawListeners } = require('../models/post.model');
let PostModel = require('../models/post.model');

let Post = PostModel.Post;

router.route('/').get((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
}); 

router.route('/add').post((req, res) => {
    const post = req.body;


    const newPost = new Post(post);
  
    newPost.save()
    .then(() => res.json('Exercise added!' + newPost))
    .catch(err => res.status(400).json('Error: ' + err));
  }); 

  router.route('/:id').get((req, res) => {
    Post.findById(req.params.id)
      .then(post => res.json(post))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Post.findByIdAndDelete(req.params.id)
      .then(() => res.json('post deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').patch( async (req, res,next) => 
  {
    try {
      const id = req.params.id; 
      const updates = req.body; 
      const options = { new:true}; 

      const result = await Post.findByIdAndUpdate(id,updates,options); 
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
      
      
  } 
  )
   
    

  module.exports = router;