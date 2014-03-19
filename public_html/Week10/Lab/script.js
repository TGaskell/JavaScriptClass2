/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//initialize global arrays and variables
var link1Click = [];
var link2Click = [];
var readTerms = [];
var btnErr = [];
var docLink1 = document.getElementById('agreeLink1');
var docLink2 = document.getElementById('agreeLink2');
var agreeScroll = document.getElementById('agreeScroll');
var btnCont = document.getElementById('submitAgreement');
var radioAgree = document.getElementById('agree');
var radioNoAgree = document.getElementById('notagree'); 
var errorMsg = document.getElementById('errorMessage');
var validateLink1 = false;
var validateLink2 = false;
var scrollDown = false;
var changeDiv = null;
var newDiv = null;
 
// Add event listeners
docLink1.addEventListener("click",DocumentLink1);
docLink2.addEventListener("click",DocumentLink2);
agreeScroll.addEventListener('scroll',Scroll);
btnCont.addEventListener("click",btnContinue);

//Functions sends data to arrays when links are clicked used with validations & changes the DocLinks to red
function DocumentLink1 (){
    link1Click.push("clicked");
    docLink1.style.color = "red";
    validateLink1 = true;
    errorMsg.innerHTML = "";
}

function DocumentLink2 (){
    link2Click.push("clicked");
    docLink2.style.color = "red";
    validateLink2 = true;
    errorMsg.innerHTML = "";
}

//Function sends data to array when scrolled to bottom and enables the radio buttons
function Scroll(){
    if (agreeScroll.scrollTop === (agreeScroll.scrollHeight - agreeScroll.offsetHeight)){
        readTerms.push("Scrolled");
        radioAgree.disabled = false;
        radioNoAgree.disabled = false;
    }
}


//Validations 

    if (link1Click[0] === "clicked"){
       validateLink1 = true;
    }
    
    if (link2Click[0] === "clicked"){
       validateLink2 = true;
    }
 
    if (readTerms[0] === "Scrolled"){
      scrollDown = true; 
    }   

 
    
// Function to change page if validation is true
function btnContinue(){
        
    if(validateLink1 === false || validateLink2 === false){
      errorMsg.style.color = "red";
      errorMsg.innerHTML = "Please click on each link above";
      reset_Links();
    }
    else if (radioNoAgree.checked === true){
      document.getElementById('changeDiv').style.visibility="hidden";
      createNewDiv("red","500px","1px solid red","100px","1em auto","<h3>Terms & conditions were declined. To continue, terms and conditions must be accepted. To try again please refresh page.</h3>");
    }
    else {
      document.getElementById('changeDiv').style.visibility="hidden";
      createNewDiv("black","500px","1px solid green","50px","1em auto","<h3>You have met the requirments. Please continue.</h3><br><br> <p>The purpose of this project is to have a user agree to the terms and conditions before they can continue.  The user must click on the links to view a document.  They must also agree to the terms and condition of the scroll box agreement. Once the user agrees they can click continue and a confirmation message should appear.</p>");
    }
   }

// Function to create a new div and display message 
function createNewDiv(divcolor,divwidth,divborder,divheight,divmargin,divhtml){
var newDiv = document.createElement("div");
      newDiv.style.color = divcolor;
      newDiv.style.width = divwidth;
      newDiv.style.border = divborder;
      newDiv.style.height = divheight;
      newDiv.style.margin= divmargin;
      var label = document.createElement('label');
      label.innerHTML = divhtml;
      label.style.textAlign="center";
      newDiv.appendChild(label);
      changeDiv = document.getElementById("changeDiv");
      document.body.insertBefore(newDiv, changeDiv);
}
// Function to set the radio btns based on validations above 
function Clear_Disable(){
     radioAgree.checked = false;
     radioNoAgree.checked = false;
     radioAgree.disabled = true;
     radioNoAgree.disabled = true;
}

//Function to reset links if both links have not been clicked
function reset_Links(){
    link1Click.push("");
    docLink1.style.color = "blue";
    validateLink1 = false;
    link2Click.push("");
    docLink2.style.color = "blue";
    validateLink2 = false;
}
