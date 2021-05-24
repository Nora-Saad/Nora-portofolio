window.onload = function () {
    var icon = document.getElementById("icon");
  var introB = document.getElementById("introB");

    if (icon) {
      icon.addEventListener('click', skriv);
    }
  
    function skriv() {
     introB.style.display = "none";
      
    }
  }

