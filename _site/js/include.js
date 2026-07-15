function includeHTML_old() {
    var z, i;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      let elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      let file = elmnt.getAttribute("w3-include-html");
      if (file) {
        console.log(file)
        /* Make an HTTP request using the attribute value as the file name: */
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            // includeHTML_old();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        // return;
      }
    }
  }

  function includeHTML() {
    var z, i, promises = [];
    /* Loop through a collection of all HTML elements: */
    
    z = document.getElementsByTagName("*");


    for (i = 0; i < z.length; i++) {
      let elmnt = z[i];
      // console.log(elmnt);
      /*search for elements with a certain atrribute:*/
      let file = elmnt.getAttribute("w3-include-html");
      if (file) {
        let promise = new Promise((resolve, reject) => {

            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText; resolve(this.responseText);}
                if (this.status == 404) {elmnt.innerHTML ="Page not found."; reject();}
                /* Remove the attribute, and call this function once more: */
                
              }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
       
        });
        promise.then(html => {
          // elmnt.innerHTML = html;
          elmnt.removeAttribute("w3-include-html");
        },err =>{
          // elmnt.innerHTML = err;
          // elmnt.removeAttribute("w3-include-html");
        });
        promises.push(promise);
        /* Make an HTTP request using the attribute value as the file name: */
      }
    }

    return Promise.all(promises);
  }



