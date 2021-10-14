window.addEventListener("load", function() {

    let hola = document.getElementById("hello");

        hola.addEventListener("mouseover", function(event){
            hola.innerHTML = "<a href='about.html'>About</a>";
            hola.style.color = "#A6F0C6";
        })
        
        hola.addEventListener("mouseout", function(){
            hola.innerHTML= "Hello,";
            hola.style.color = "ghostwhite";
        })

})






