# blog_expressJS
Simple Express blog applicaiton <br />
==============
**Author: Navjot Cheema <br />
Company: BlueJay - Server team** <br />

**Files:** 
- index.js: main express page 
- package.json: dependencies

**Models:**
```javascript
- Comment = { author: String, message: String, }
- Post = { author: String, title: String, message: String };
```


**REST API:**<br />

* "/posts":	
 * Get,Post <br />

* "/posts/:id": 
 * Get, Put, Delete<br />
 
 
* "/posts/:id"/comments": 
 * Get, Post <br />

* "/posts/:id"/comments/:cid"
 * Get, Put, Delete <br />
 
 
Sample Run
-----------
```
curl -X POST http://localhost:8000/posts --data "author=v&title=f&message=gi"<br />
{"message":"Post was created without error!"}
```
