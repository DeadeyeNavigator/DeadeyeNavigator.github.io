function numberReturn() {
if (typeof(Storage) !== "undefined") {
  if (localStorage.returns) {
    localStorage.returns = Display(localStorage.returns);
    } else {
      localStorage.returns = null;
           }
           document.getElementById("amount").innerHTML = localStorage.returns; 
                             } else { 
                             document.getElementById("amount").innerHTML = "Sorry, your browser does not support web storage...";
                                    }
   }
                        
           
