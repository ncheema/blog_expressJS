var express = require('express')
var bodyParser = require('body-parser')
var app = express(); 
var router = express.Router();
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/blog');
// connect to our database

//custom modules 
var Comment = require('./models/comment');
var Post = require('./models/post');
//url encoding
app.use(bodyParser.urlencoded({ extended: true }));
//decode JSON
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
//-------------------
//middleware to use for all coming requests
router.use(function(req,res,next){
	next();//go to next route
})
router.get('/',function(req, res) {
	res.json({mess: "hi welcome to first assignment of CSE-112"})
})
//Post route
router.route('/posts')
			.post(function(req, res){
				var post = new Post();
				post.author = req.body.author;
				post.title = req.body.title;
				post.message = req.body.mesage;
				
				post.save(function(err){
					if (err)
						res.send(err);
					res.json({ message: 'Post was created without error!' });
				})
			})
			
			//get all posts
			.get(function(req,res) {
				Post.find(function(err, posts) {
					if (err)
						res.send(err);
					res.json(posts);
				});
			})

//route for single post request
router.route('/posts/:id')
			.get(function(req, res){
				Post.findById(req.params.id, function(err,post) {
					if (err)
						 res.send(err);
					res.json(post);		        
				});
				
			})
			//upadte a post
			.put(function(req,res){
				Post.findById(req.params.id, function(err,post) {
					if (err)
						res.send(err);
					post.author = req.body.author;
					post.title = req.body.title;
					post.message = req.body.mesage;
				
					post.save(function(err){
						if (err)
							res.send(err);
						res.json({ message: 'Post was updated without error!' });
					});	
				});
			})
			
			//delete a psot
			.delete(function(req, res) {
			        Post.remove({_id: req.params.post_id}, 
						function(err, post) {
			            if (err)
			                res.send(err);
			            res.json({ message: 'Successfully deleted' });
			        });
			    });
			
	
//Route for comments
router.route('/posts/:id/comments')

	   //get
	   	     .get(function(req, res) {
	   		        Comment.find({_post:req.params.id} ,
						function(err, comments) {
	   		            if (err)
	   		                res.send(err);

	   		            res.json(comments);
	   		        });
	   	      })
		 //post
	    .post(function(req,res) {
    

	         //Create comment as child of post
		    var comment = new Comment(); 
			comment.author = req.body.author   
		    comment.message = req.body.message;
		    comment._post = req.params.id;
		    // save the comment and check for errors
		    comment.save(function(err) {
		            if (err)
		                res.send(err);

		            res.json({ message: 'Comment Created Successfully' });
		    });


    
	     })	
//route for single comments
router.route('/posts/:id/comments/:cid')
		.get(function(req, res){
			Post.findById(req.params.cid, function(err,post) {
				if (err)
					 res.send(err);
				res.json(post);		        
			});
			
		})
		//upadte a comment
		.put(function(req,res){
			Post.findById(req.params.cid, function(err,post) {
				if (err)
					res.send(err);
				post.author = req.body.author;
				post.message = req.body.mesage;
			
				post.save(function(err){
					if (err)
						res.send(err);
					res.json({ message: 'Comment was updated without error!' });
				});	
			});
		})
		
		//delete a comment
		.delete(function(req, res) {
		        Post.remove({_id: req.params.cid}, 
					function(err, post) {
		            if (err)
		                res.send(err);
		            res.json({ message: 'Successfully deleted' });
		        });
		    });
		 		 		
//register routes
app.use('/api', router)	//register routes

app.listen(8080);
console.log("port# " + port)







