/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function noSpaceAlphaValidate( str ) {
        var alphaRegex = /(^[a-zA-Z]+$)/;
        return alphaRegex.test(str);			
}

function SpaceAlphaValidate( str ) {
        var spaceRegex = /([a-zA-Z ]+)/;
        return spaceRegex.test(str);			
}

function strip_HTML(str) {
        var findHtml = /(<(.|\n)*?>)/gi;
        return str.replace(findHtml,"");
}

function emailValidate(str) {
        var emailRegex = /(^[a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{3}$)/;
        return emailRegex.test(str);
}



function submitform() {


        var fname = document.getElementById('fname');
        var lname = document.getElementById('lname');
        var email = document.getElementById('email');
        var comments = document.getElementById('comments');

        if ( !fname.value.length ) {
                console.log("First name needs a length");
        } else if ( noSpaceAlphaValidate( fname.value ) == false ) {
                console.log("First name needs Alpha chars");
        } else {
                console.log("First name is good");
        }
        
        if ( !lname.value.length ) {
                console.log("Last name needs a length");
        } else if ( SpaceAlphaValidate( lname.value ) == false ) {
                console.log("Last name needs Alpha chars");
        } else {
                console.log("Last name is good");
        }
        
        if ( !email.value.length ){
            console.log("Email needs a length");
        }else if ( emailValidate( email.value ) == false ) {
                console.log("Email is not valid");
        } else {
                console.log("Email is good");
        }
        
        if ( !comments.value.length ){
            console.log("Comment needs a length");
        }else if ( strip_HTML( comments.value ) == false ) {
                console.log("Comment has HTML");
        } else {
                console.log("Comment is good");
        }

}
