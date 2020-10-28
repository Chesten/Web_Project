import React from 'react';
import './HelpPage.css';

//A simple help page to show for demonstration. Links to all other 
//pages as well
function Help(props) {
    return(
      <div>
          <div id ="navbar">
            <a href="/home">Home</a>
            <a href="/news">News</a>
            <a href="/contact">Contact</a>  
            <div id = "logoutButton">
               <a href="/login">Log Out</a>
            </div>
          </div>
          <body id = "helpText">
              This would be a super helpful page with a lot of info :)
          </body>
      </div>
      )
  }
  
  document.body.style.backgroundColor = "#282c34";
  
  export default Help;