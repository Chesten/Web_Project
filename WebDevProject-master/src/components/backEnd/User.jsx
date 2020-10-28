//this is the basic structure for a User
//this checks to make sure that there are values for each item of the struct. 
//

class User{
    constructor(des){
        this.UiD = des.UiD;
        this.userName = des.userName;
        this.email = des.email;
        this.password = des.password;
        this.posts = des.posts;
        this.numPlays = des.numPlays;
    }

    isNewValid(){
        this.errors= [];
        if(!this.userName|| this.email.length<=3){
            this.errors.push("userName errors");
        }
        if(!this.email|| this.email.length<=6){ //add more for checking uniqueness and email format
            this.errors.push("email error");
        }
        if(!this.password || this.password.length <=4){     //could add more for security
            this.errors.push("password errors")
        }
        if(this.posts > 0){  //post's is an array of the PiD for the posts this user has made
            this.errors.push("posts error");
        }
        if(this.numPlays >0){
            this.errors.push("NumPlays error");
        }

        if(this.errors.length >= 1){
            return this.errors;
        }
        else return this.email;
    }

    isUpdateValid(previous){
        this.errors= [];
        if(!this.UiD || this.UiD !== previous.UiD){
            this.errors.push("UiD update errors");
        }
        if(!this.UserName){
            this.errors.push("userName update errors");
        }
        if(!this.email|| this.email.length<=6){
            this.errors.push("email update error");
        }
        if(!this.password || this.password.length <=4){
            this.errors.push("password update errors")
        }
        if(this.posts.length !== previous.posts.length){
            this.errors.push("posts update error");
        }
        if(this.numPlays !== previous.numPlays){
            this.errors.push("NumPlays update error");
        }

        if(this.errors.length >= 1){
            return this.errors;
        }
        else return this.email;
    }
}

export default User;