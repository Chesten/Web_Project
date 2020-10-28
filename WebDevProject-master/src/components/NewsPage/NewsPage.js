import React from 'react';
import './NewsPage.css';

//A simple news page to show for demonstration. Links to all other 
//pages as well
function News(props){
    return(
        <div>
          <div id ="navbar">
            <a href="/home">Home</a>
            <a href="/help">Help</a>
            <a href="/contact">Contact</a>  
            <div id = "logoutButton">
              <a href="/login">Log Out</a>
            </div>
        </div>
        <body id = "newsText">
            <div>
                 Newsss pageee for lots of news and things about stuff!!             
            </div>
        </body>
    </div>
    )
}

document.body.style.backgroundColor = "#282c34";

export default News;