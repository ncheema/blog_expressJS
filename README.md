# blog_expressJS
# Serverside-MEAN - Krishna Kolli

Simple Express blog applicaiton 
Author: Navjot Cheema
Company: BlueJay - Server team 

Files:
   index.js - main express page
   package.json dependencies

Models:

Comment = {
   author: String,
	 message: String,
}

post = {
    author: String,
	  title: String,
	  message: String
});
}
---------------------------------------------------

REST API:
 "/posts":
  GET -  Get posts
  POST - Creates post

--"/posts/:id":
  Get, Put, Delete
--"/posts/:id"/comments":
  Get, Post

-- "/posts/:id"/comments/:cid":
  Get, Put, Delete


