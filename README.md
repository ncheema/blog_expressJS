# blog_expressJS
Simple Express blog applicaiton <br />
==============
**Author: Navjot Cheema <br />
Company: BlueJay - Server team** <br />

Files: 
- index.js: main express page 
- package.json: dependencies

Models:
  Comment = { author: String, message: String, }<br />
  Post = { author: String, title: String, message: String });<br />



**REST API:**<br />

"/posts":<br />
Get,Post <br />

--"/posts/:id": Get, Put, Delete<br />
--"/posts/:id"/comments": Get, Post <br />

-- "/posts/:id"/comments/:cid"<br />
: Get, Put, Delete <br />
Sample Run
-----------
curl -X POST http://localhost:8000/posts --data "author=v&title=f&message=gi"<br />
{"message":"Post was created without error!"}
