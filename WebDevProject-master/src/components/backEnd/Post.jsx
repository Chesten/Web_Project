//this is the basic Post structure, it defines what values a 
//post should have, and does basic checking of each item to 
//make sure it's valid

class Post{
    constructor(des){
        this.PiD=des.PiD;
        this.UserName=des.UserName;
        this.Title=des.Title;
        this.Description=des.Description;
        this.DatePosted=des.DatePosted;
        this.FILE=des.FILE;
        this.PlayCount= 0;
    }


    //"this" is called on a post, passing the user that creates the post.
    //these should check various things about the post, and make sure the 
    //user is able to post/ update the post
    isNewValid(){
        this.errors= [];
        if(!this.UserName){
            this.errors.push("userName errors");
        }
        if (!this.Title||this.Title.length<=3){
            this.errors.push("title errors");
        }
        if(!this.Description || this.Description.length <=3){
            this.errors.push("description errors");
        }
        if(!this.DatePosted){
            this.errors.push("date error");
        }
        if(!this.FILE){
            this.errors.push("no file submitted");
        }
        if(this.PlayCount>0){
            this.errors.push("playCount error")
        }

        if(this.errors.length >=1){
            return this.errors;
        }
        else return this.Title;
    }

    isUpdateValid(userName, previous){
        this.errors= [];
        if(!this.UserName || this.UserName === userName){
            this.errors.push("userName update errors");
        }
        if (!this.Title||this.Title.length<=3){
            this.errors.push("title update errors");
        }
        if(!this.Description || this.Description.length <=3){
            this.errors.push("description update errors");
        }
        if(!this.DatePosted || this.DatePosted!==previous.DatePosted){
            this.errors.push("date update error");
        }
        if(!this.FILE){
            this.errors.push("no file update submitted");
        }
        if(this.FILE === previous.FILE&&this.PlayCount>0){
            this.errors.push("playCount 0 update reset error")
        }
        if (this.FILE !== previous.FILE && this.PlayCount > 0){
            this.errors.push("playCount not reset on new file update error")
        }

        if(this.errors.length >=1){
            return this.errors;
        }
        else return this.Title;
    }

}

export default Post;