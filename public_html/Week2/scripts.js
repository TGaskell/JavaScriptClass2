/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//function to error check the form entries
function submitForm() {
    var fullName = document.getElementById("name");
    var fullNameErr = document.getElementById("err_name");
    var email = document.getElementById("email");
    var emailErr = document.getElementById("err_email");
    var comments = document.getElementById("comments");
    var commentsErr = document.getElementById("err_comments");
 
    //check the name field to make sure there is an entry
    if ( fullName.value.length > 0 ){        
        fullName.className = "good";
        fullNameErr.innerHTML = "Ok!";
        fullNameErr.className = "error";
    } else {
        fullName.className = "bad";
        fullNameErr.innerHTML = "Enter valid Name";
        fullNameErr.className = "error";
    }
    
    //check the email address for an @ symbol and a . and there is an entry
    if ( email.value.length > 0 &&  email.value.indexOf("@") > 0 && email.value.indexOf(".") > 0 ) {
        email.className = "good";
        emailErr.innerHTML = "Ok!";
        emailErr.className = "error";
    } else {
        email.className = "bad";
        emailErr.innerHTML = "Enter valid Email";
        emailErr.className = "error";        
               }
       
    //check that there was a comment entered into the comments box
   if ( comments.value.length > 0 &&  comments.value.length < 151 ) {
        comments.className = "good";
        commentsErr.innerHTML = "Thank you for your comment";
        commentsErr.className = "error";
    } else {
        comments.className = "bad";
        commentsErr.innerHTML = "Please enter your comment";
        commentsErr.className = "error";                
    }              
}

