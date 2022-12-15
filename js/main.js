
    function highlightActor(actor){

        let spans = document.querySelectorAll("#play span");
        for(const mySpan of spans){

        if(actor == mySpan.dataset.actor){// white, then turn yellow
                mySpan.style.backgroundColor='yellow';
        }else{// turn white
                mySpan.style.backgroundColor='white';
            }

        }
        
    }

    let spans = document.querySelectorAll("#play span");
 
    console.log(spans);

    for(const mySpan of spans){

       mySpan.addEventListener("click", function(ev){
            highlightActor(mySpan.dataset.actor);

       });

    }
   
   //https://tinyurl.com/dynamic-html-checker
    document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
      
    document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
     
     //set current year in span with id of this-year
     let d = new Date(); let thisYear = d.getFullYear();
     document.getElementById("this-year").innerHTML = thisYear;
    
    //manages mobile nav 
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        }else {
            x.className = "topnav";
        }
    }   