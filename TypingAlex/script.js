document.addEventListener("keydown", function(event) {
    var currentElement = document.querySelector("span.current");
    var parentElement = document.querySelector("p.text");

    if (event.key == "Backspace") {
        if (currentElement != parentElement.firstChild.nextSibling) {
            currentElement.className = 'char';
            currentElement.previousElementSibling.className = 'char current';
        }
        
    }
    else if (event.key == "Shift") {
        if (currentElement.textContent.toLowerCase() == event.key) {
            currentElement.className = 'char ok';
            currentElement.nextElementSibling.className = "char current";
        }
    }
    
    else if (currentElement.textContent == event.key && currentElement.textContent == " ") {
        currentElement.className = 'char ok-space';
        currentElement.nextElementSibling.className = "char current";
    } 

    else if (currentElement.textContent == event.key) {
        currentElement.className = 'char ok';
        currentElement.nextElementSibling.className = "char current";
    } 
    
    else if (currentElement.textContent != event.key && currentElement.textContent == " ") {
        currentElement.className = 'char pas-ok-space';
        currentElement.nextElementSibling.className = "char current";
    } 
    
    else {
        currentElement.className = 'char pas-ok';
        currentElement.nextElementSibling.className = "char current";
    }
});
