import React from 'react';
import './ContactPage.css';

//A simple contact page to show for demonstration. Links to all other 
//pages as well
function Contact(props) {
    return(
      <div>
          <div id ="navbar">
            <a href="/home">Home</a>
            <a href="/news">News</a>
            <a href="/help">Help</a>
            <div id = "logoutButton">
               <a href="/login">Log Out</a>
            </div>
          </div>
          <body id = "contactText">
                  Our number is 111-111-1111, but you don't need to see that.
                  <div id = "desc">
                  <p>For our final project we decided to create a web app form where people can come and post loops of songs they 
                    created for others to use in their songs.  Sites like this already exist, but tend to be not as user friendly,
                    and don't have a modern feel, like our app. We utilized React's "infinite scroll" feature to improve user 
                    experience, so there was seemingly no loading on the users side, or pages to flip through.  This is key for 
                    giving our site a smoother, more modern look as opposed to others that depend on pages, and only pull audio 
                    once the play button is pressed, causing a delay in playback.  Our site dynamically brings the audio in when 
                    drawing a new post, allowing for instant playback and no loading.</p>
                  <p>We also used a basic memory database for this implementation, but designed it so it could easily be 
                      expanded to a more robust database.  We built out a structure for a "post" that consisted of things like 
                      the title of the track, user who posted it, and a description, along with the path to the song.  This basic 
                      DB does have some value checking, but more unit checking would be needed for a full development.  The User's
                       DB also is not integrated with the login page, and the user profile side of things were not implemented.  </p>
                    <p>The site also has multiple pages that could be fleshed out depending on the clients needs, from New's, 
                      Contact, and Help.  All site links redirect the user to the given pages, as well as the "logOut" link taking 
                      you out of the app.  In the Log in page, it also displays error messages for invalid Usernames or passwords, 
                      and also prompts the user when creating a new account.  </p>

                  </div>
          </body>
      </div>
      )
  }
  
  document.body.style.backgroundColor = "#282c34";
  
  export default Contact;