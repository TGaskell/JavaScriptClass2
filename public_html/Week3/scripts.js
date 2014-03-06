/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        //Function for JSON
        function changeAd(){
            //JSON settings
            var ads = [];
            
            ads.push({ "adTitle" : 'Pepsi', "adDesc" : 'Real Cola Taste'});
            ads.push({ "adTitle" : 'Coke', "adDesc" : 'Have a Coke and a Smile'});
            ads.push({ "adTitle" : 'Dr. Pepper', "adDesc" : 'Be a Pepper'});
            ads.push({ "adTitle" : 'Water', "adDesc" : 'It is better for you'});
            ads.push({ "adTitle" : 'Juice', "adDesc" : 'Natural and Delicious'});
            
            
            var randIndex = randomize(ads.length);
            
            console.log(randIndex);
            console.log(ads[randIndex]["adTitle"] + " " + ads[randIndex]["adDesc"]);
            
            var div = document.getElementById("ad");
            div.innerHTML = ads[randIndex]["adTitle"] + " " + ads[randIndex]["adDesc"];
            
            document.title = ads[randIndex]["adDesc"].substr(0,10);
        }
            
           
          function randomize (max){
              return (Math.floor( Math.random()*max));
          } 
           
          // var randomAd = randomize(ads.length);
          changeAd();