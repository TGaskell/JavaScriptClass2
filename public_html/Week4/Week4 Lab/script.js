/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//JSON variables for arrays
var userdata = {
    "email" : "",
    "name" : "",
    "mousex" : [],
    "mousey" : [],
    "screenHeight" : [],
    "screenWidth": [],
    "agent":"",
    "page":""
    
};   
        
        //Function and event listener to return email and name after blur
        function getEntry(){

            userdata.email = document.getElementById('email').value;
            userdata.name = document.getElementById('fullname').value;
        }
        var email = document.getElementById('email');
        var fname = document.getElementById('fullname');
        email.addEventListener('blur', getEntry);
        fname.addEventListener('blur', getEntry);
        
       
        
        //Function and event listener to get mouse movement coords 
        function onMouseMove(e){
                userdata.mousex.push(e.clientX);
                userdata.mousey.push(e.clientY);
                
                if ( userdata.mousex.length > 100 ) {
                        document.removeEventListener('mousemove', onMouseMove);
                }
        }
        document.addEventListener('mousemove', onMouseMove);  

        //Function to show information when window loads
        function windowLoad(){
            userdata.screenHeight = window.innerHeight;
            userdata.screenWidth = window.innerWidth;
            userdata.agent = window.navigator.userAgent;
            userdata.page = document.title;
        }
        window.addEventListener('load', windowLoad);
        
        
//Function to show results in the console
function showResults() {
    console.clear();
    console.log(userdata);
}


var results = document.getElementById('showResults');


results.addEventListener("click", showResults);
