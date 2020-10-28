import Post from './Post';

//this is the Post DB, This handles basic CRUD opperations for
//the posts, and stores all the posts in an array.  

console.log("inside Post DB");

class PostDB{
    static allPosts(){
        return this.allPostsDB;
    }
    static find(id){
        return this.allPostsDB.find((item)=>item.Pid===id);
    }

    //these methods should output either the new post, or
    //an error message along with the array of errors created by is_Valid methods
    static createPost(postDes){
        let newPost = new Post(postDes);
        if(newPost.isNewValid() === newPost.Title){
            newPost.PiD = this.allPostsDB.length +1;          //could modify to find first avalible good value
            this.allPostsDB.push(newPost);
            return newPost.Title;
        }
        else return "error in creating post: " + newPost.isNewValid();
    }

    static updatePost(userName, PiD, newDes){
        let oldpost = this.allPostsDB[PiD];
        let modPost = new Post(newDes);
        if(modPost.isUpdateValid(userName, oldpost)===modPost.Title){
            this.allPostsDB[PiD] = modPost;         //replace old with new post
            return modPost.Title;
        }
        else return "error in update: " +modPost.isUpdateValid(userName, oldpost);
        
    }

    static incPlay(index){
        this.allPostsDB[index].playCount++;
    }

    static searchPost(anything){
        return this.allPostsDB.find((item) => (item.Title === anything || item.UserName === anything || item.Description === anything || item.DatePosted === anything));    }
    }

PostDB.allPostsDB = [];

PostDB.createPost({UserName: 'FIRST', Title: 'first', Description: 'thing 2', DatePosted: 'yesterday', FILE: './Sounds/guitar.wav', playCount: 0});
PostDB.createPost({UserName: 'joe', Title: 'thing3', Description: 'thing 4', DatePosted: 'yesterday1', FILE: './Sounds/drums.wav', playCount: 0});
PostDB.createPost({UserName: 'jimbo', Title: 'thingOne4', Description: 'thing 22', DatePosted: 'yesterday', FILE: './Sounds/more sounds.wav', playCount: 0});
PostDB.createPost({UserName: 'PeculiarBannana', Title: 'Simpleloop', Description: 'thing 2', DatePosted: 'yesterday', FILE: './Sounds/soundthing.wav', playCount: 0});
PostDB.createPost({UserName: 'jim', Title: 'thingOne4', Description: 'thing 22', DatePosted: 'yesterday', FILE: './Sounds/flute.wav', playCount: 0});
PostDB.createPost({UserName: 'ken', Title: 'thingOne6', Description: 'thing 25', DatePosted: 'yesterday', FILE: './Sounds/synth.wav', playCount: 0});
PostDB.createPost({UserName: 'FIFTH', Title: 'thingOne6', Description: 'thing 25', DatePosted: 'yesterday', FILE: './Sounds/another-test.wav', playCount: 0});
PostDB.createPost({UserName: 'Bob', Title: 'thingOne', Description: 'thing 2', DatePosted: 'yesterday', FILE: './Sounds/guitar.wav', playCount: 0});
PostDB.createPost({UserName: 'jim', Title: 'thingOne4', Description: 'thing 22', DatePosted: 'yesterday', FILE: './Sounds/more sounds.wav', playCount: 0});
PostDB.createPost({UserName: 'PeculiarBannana', Title: 'Simpleloop', Description: 'thing 2', DatePosted: 'yesterday', FILE: './Sounds/soundthing.wav', playCount: 0});
PostDB.createPost({UserName: 'joe', Title: 'thing3', Description: 'thing 4', DatePosted: 'yesterday1', FILE: './Sounds/drums.wav', playCount: 0});
PostDB.createPost({UserName: 'jim', Title: 'thingOne4', Description: 'thing 22', DatePosted: 'yesterday', FILE: './Sounds/flute.wav', playCount: 0});
PostDB.createPost({UserName: 'McMans', Title: 'thingOne6', Description: 'thing 25', DatePosted: 'yesterday', FILE: './Sounds/synth.wav', playCount: 0});
PostDB.createPost({UserName: 'TENTH', Title: 'thingOne6', Description: 'thing 25', DatePosted: 'yesterday', FILE: './Sounds/another-test.wav', playCount: 0});
PostDB.createPost({UserName: 'jim', Title: 'thingOne4', Description: 'thing 22', DatePosted: 'yesterday', FILE: './Sounds/more sounds.wav', playCount: 0});
PostDB.createPost({UserName: 'PeculiarBannana', Title: 'Simpleloop', Description: 'thing 2', DatePosted: 'yesterday', FILE: './Sounds/soundthing.wav', playCount: 0});
PostDB.createPost({UserName: 'Bob', Title: 'thingOne', Description: 'thing 2', DatePosted: 'yesterday', FILE: './Sounds/guitar.wav', playCount: 0});
PostDB.createPost({UserName: 'joe', Title: 'thing3', Description: 'thing 4', DatePosted: 'yesterday1', FILE: './Sounds/drums.wav', playCount: 0});
PostDB.createPost({UserName: 'jim', Title: 'thingOne4', Description: 'thing 22', DatePosted: 'yesterday', FILE: './Sounds/flute.wav', playCount: 0});
PostDB.createPost({UserName: 'ken', Title: 'thingOne6', Description: 'thing 25', DatePosted: 'yesterday', FILE: './Sounds/synth.wav', playCount: 0});
PostDB.createPost({UserName: 'FIFTEENTH', Title: 'thingOne6', Description: 'thing 25', DatePosted: 'yesterday', FILE: './Sounds/another-test.wav', playCount: 0});
PostDB.createPost({UserName: 'Bob', Title: 'thingOne', Description: 'thing 2', DatePosted: 'yesterday', FILE: './Sounds/guitar.wav', playCount: 0});
PostDB.createPost({UserName: 'joe', Title: 'thing3', Description: 'thing 4', DatePosted: 'yesterday1', FILE: './Sounds/drums.wav', playCount: 0});
PostDB.createPost({UserName: 'Peoples', Title: 'thingOne4', Description: 'thing 22', DatePosted: 'yesterday', FILE: './Sounds/flute.wav', playCount: 0});
PostDB.createPost({UserName: 'ken', Title: 'thingOne6', Description: 'A nice sound?', DatePosted: 'yesterday', FILE: './Sounds/synth.wav', playCount: 0});
PostDB.createPost({UserName: 'TWENTIETH', Title: 'thingOne6', Description: 'thing 25', DatePosted: 'yesterday', FILE: './Sounds/another-test.wav', playCount: 0});
PostDB.createPost({UserName: 'jim', Title: 'thingOne4', Description: 'thing 22', DatePosted: 'yesterday', FILE: './Sounds/flute.wav', playCount: 0});
PostDB.createPost({UserName: 'ken', Title: 'thingOne6', Description: 'thing 25', DatePosted: 'yesterday', FILE: './Sounds/synth.wav', playCount: 0});
PostDB.createPost({UserName: 'woo', Title: 'thingOne6', Description: 'thing 25', DatePosted: 'yesterday', FILE: './Sounds/another-test.wav', playCount: 0});
PostDB.createPost({UserName: 'Bob', Title: 'thingOne', Description: 'thing 2', DatePosted: 'yesterday', FILE: './Sounds/guitar.wav', playCount: 0});
PostDB.createPost({UserName: 'TWENTY-FIFTH', Title: 'thing3', Description: 'thing 4', DatePosted: 'yesterday1', FILE: './Sounds/drums.wav', playCount: 0});
PostDB.createPost({UserName: 'jimbo', Title: 'thingOne4', Description: 'thing 22', DatePosted: 'yesterday', FILE: './Sounds/more sounds.wav', playCount: 0});
PostDB.createPost({UserName: 'PeculiarBannana', Title: 'Simpleloop', Description: 'thing 2', DatePosted: 'yesterday', FILE: './Sounds/soundthing.wav', playCount: 0});


console.log(PostDB.allPosts);
export default PostDB;
