const Post = require('./Post');
// const User = require('./User');
// const UserDB = require('./UserDB');
// const PostDB = require('./UserDB');

//this is the controller between the main pages and the backend Databases, both for user's and for posts. 
//this handles basic CRUD operations, and sends the responces to the main pages on sucess or the error

class DB_Controller{
    //if log in matches send to home page

    async logIn(req, res){
        //don't know how to send correct code through res
        //res.data.code = 200;
        //return res;

        var flag = 0;
        var users = new Array();
        users =this.UserDB.allUsers();
        users.forEach(element => {
            if(element.email === req.email){
                flag =1;        //user is in system, check pass word
                if(element.password === req.password){
                    flag =2;    //correct password
                }
            }
        });
        if(flag===1){
            res.writeHead(204); //password didn't match
        }
        else if(flag===2){
            res.writeHead(200); //correct credentials
        }

        return res;
    }
    //creating a new user
    async CreateNewUser(req, res){
        if(this.UDB.createUser(req) === req.email){   //will send users email if OK
            res.writeHead(200, "created new user");
        }
        else {
            res.writeHead(204,"error in creating account: " + this.UDB.createUser(req))
        }
    }

    //new post 
    async CreateNewPost(req, res){
        if(this.PDB.createPost(req)===req.Title){
            res.writeHead(200, "new post created");
        }
        else{
            res.writeHead(204, "error posting: " + this.PDB.createPost(res))
        }
    }

    //for editing post
    async edidPost(req, res){
        if(req.User.UiD === req.Post.PiD){
            //function call for drawing the "editPost" page
            //send the req.Post to fill in the values to edit 
            //get post back and store localy
            var newPost = new Post();
            //after geting the new values, send to update, will send error if something went wrong in update
            var rt = this.PDB.updatePost(req.post.PiD, newPost); 
            if(rt === newPost){
                return res.writeHead(202, "update compleate");
            }
            else {
                return res.writeHead(204, rt);
            }
        }
        else{
            res.writeHead(204, "user does not have access to post");
        }
    }

    //for editing user
    async editUser(req, res){
        //similar to the edit post function, but we need a way to check if "this" user is editing "their" profile

    }


    //getting posts
    async index(req, res){
        let posts = await this.PDB.allPosts();
        res.render(); //fill for scroll mechanic
    }

}

export default DB_Controller;