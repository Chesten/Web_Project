import User from './User';

//this is the User DataBase, it holds the CRUD operations only for the users
//Stores all users in an array, and pushes new users into the array. 

console.log("inside User DB");

class MemoryUserDB{
    static allUsers(){
        return this.allUsersDB;
    }


    static createUser(userDes){
        let newUser = new User(userDes);
        if(newUser.isNewValid()===newUser.email){
            newUser.UiD = this.allUsersDB.length +1;          //could modify to find first avalible good value
            this.allUsersDB.push(newUser);
            console.log(newUser);
            return newUser.email;
        }
        else {
            console.log("error creating new user: " + newUser.isNewValid())
            return "error creating new user: " + newUser.isNewValid();
        }
    }

    static updateUser(UiD, newDes){
        let olduser = this.allUsersDB[UiD];
        let modUser = new User(newDes);
        if(modUser.isUpdateValid(olduser)===modUser.email){
            this.allUsersDB[UiD] = modUser;
            return modUser.email;
        }
        else return "error updating user: " + modUser.isUpdateValid(olduser);
    }
}

MemoryUserDB.allUsersDB = [];

MemoryUserDB.createUser({userName: "Chesten", email: "chestenlog@gmail.com", password: "abc123"})

console.log(MemoryUserDB.allUsers);
export default MemoryUserDB;