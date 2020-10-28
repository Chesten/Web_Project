import React from 'react';
import './HomePage.css';
import InfiniteScroll from 'react-infinite-scroll-component';
//import WaveSurfer from 'wavesurfer.js'
import ReactAudioPlayer from 'react-audio-player';
import PostDB from '../../components/backEnd/PostDB';
import UploadSound from '../Upload';
import AlertComponent from '../AlertMsg/AlertMsg';

//This is the styling for the infinite scrolling list
const style = {
    height: 120,
    margin: 100,
    padding: 90
}

var scrollHeight = 0;

//This gets all the music related posts from the DB
var postArr = PostDB.allPosts();

/*
* This is the function that is returned when a user navigates to /home. It renders the infinite scrolling list of sounds, the 
* interactive side bar of the website, and it controls the events and interaction of all of those. 
*/
  function Home() {
    window.onload = function(){
       document.getElementById("searchBar").addEventListener("keydown", searchSound);
  };
  
  return(  
    <div>
        <div className="scrollList">
          <App />       
        </div>   
        <div id ="navbar">
          <a href="/home">Home</a>
          <a href="/news">News</a>
          <a href="/contact">Contact</a>  
          <a href="/help">Help</a>
          <input type = "text" id ="searchBar" placeholder = "Search for sound"></input>
          <div id = "logoutButton">
             <a href="/login">Log Out</a>
          </div>
        </div>
    </div>
    
    )
}

//This is the function that is called when the Enter key is pressed in the search bar.
//It currently only displays a popup but would be used to traverse the infinite scroll
//list. 
function searchSound(e){
  e = window.event;
  var searchVal = document.getElementById("searchBar").value;
  if(e.key === 'Enter' && searchVal != ""){
    var searchArr = PostDB.searchPost(searchVal);
    if(searchArr != null){
      alert("FileName: " + searchArr.FILE.substring(9))
  } 
 }
}

//This is the class that sets up the Infinite scrolling component
class App extends React.Component {
    state = {
      items: Array.from({length: 20}), //This controls how many elements load before it loads more
      hasMore: true,
    };

    fetchMoreData = () => {
        //If the lenth of the items state is greater than the entire database array, stop loading.
        if (this.state.items.length >= postArr.length) {
                  this.setState({ hasMore: false });
        return;
      }
      // a fake async api call like which sends
      // 20 more records in .5 secs
      setTimeout(() => {
        this.setState ({
          items: [...this.state.items, (PostDB.find(this.state.i+1))],
          i: this.state.i+1
        });
      }, 100); //The number down here is the time it takes to "load" the data
    };
    
    //This is where the music players get rendered. We had the file parts right but the postArr
    //values needed to be determined using "index". This properly sorts through every audio file in
    //the DB and then adds them to the correct player. 
    render() {
      //This would have been used to get different scroll height via element numbers, wasn't
      //implemented right though.
      function getSize(){
        window.onload= function(){
          scrollHeight = document.getElementById("navbar").offsetHeight;
          alert(scrollHeight);
        }
      }
      return (
        <div className = "scrollDiv">
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>Loading...</h4>}
            height={800}
            endMessage={
              <p style={{ textAlign: "left" }}>  
                <b>Yay! You have seen it all</b>
              </p>
           }
          > 
           {this.state.items.map((i, index) => (  //this is the creation of each post "box", with player, and details about clip
              <div style={style} key={index}>  
              <div id = "songName">
                <div id="details">UserName: {postArr[index].UserName} - Title: {postArr[index].Title} </div>
                <div id="details">Des: {postArr[index].Description}  </div>    
                <div id = "fileName">{postArr[index].FILE.substring(9) }</div>  
              </div>
                <ReactAudioPlayer  
                  src= {postArr[index].FILE}   //something like this (getting sources should probably be server side??)
                  style={{width: "95%", backgroundColor: "#e6f7ff"}}
                  controls     
                />
              </div>        
            ))}
           </InfiniteScroll>
        </div>     
      );
    }
  }

  //Export the home page
  export default Home;