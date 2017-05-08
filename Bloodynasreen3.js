function ready() {'use strict';
    
                  document.getElementById("bloody").style.top = "320px";
                  document.getElementById("bloody").style.left = "10px";
                  document.getElementById("bloody").style.bottom = "300px";
                  function leftArrowPressed() {
        var element = document.getElementById("bloody");
        if (element.style.left === "5px") {
            clearInterval(id);
        } else {
            element.style.left = parseInt(element.style.left) - 5 + 'px';
        }
    }

    function rightArrowPressed() {
        var element = document.getElementById("bloody");
        if (element.style.left === "1070px") {
            clearInterval(id);
        } else {
            element.style.left = parseInt(element.style.left) + 20 + 'px';
        }
    }

    function upArrowPressed() {
        
        var element = document.getElementById("bloody");
        var pos = 0;
        var id = setInterval(move, 10);
        
        function move() {
            
            pos += 10;
            bloody.style.top = (pos + 'px');
            if (bloody.style.top === '280px') {
                bloody.style.top = '320px';
                clearInterval(id);
            }
        }

    }
        function punch() {
            
        bloody.src = "http://navgurukul.org/bloodynasreen/punch.gif";
        setTimeout(function () {
            bloody.src = "http://navgurukul.org/bloodynasreen/front.png";
                
        }, 1000);
            
            
    }
        
        
        
        
        
    
                  
                  
    


                                        window.addEventListener('keydown', moveSelection);
                                        function moveSelection(event) { switch (event.keyCode) {
    case 37:
        leftArrowPressed();
        break;

    case 39:
        rightArrowPressed();
        break;

    case 38:
        console.log(event.keyCode);
        upArrowPressed();
        break;

    case 40:
        downArrowPressed();
        break;
    case 80:
        punch();
        break;
    }
                                                           }

    
                 }


window.addEventListener('load', ready());