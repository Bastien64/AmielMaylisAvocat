document.addEventListener('DOMContentLoaded', function() {
    var fadeElems = document.querySelectorAll('.fade-in-right');
    
    function checkPosition() {
      for (var i = 0; i < fadeElems.length; i++) {
        var fadeElem = fadeElems[i];
        var bounding = fadeElem.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          fadeElem.classList.add('active');
        }
      }
    }
    
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
  
    checkPosition();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var fadeElems = document.querySelectorAll('.fade-in-left');
    
    function checkPosition() {
      for (var i = 0; i < fadeElems.length; i++) {
        var fadeElem = fadeElems[i];
        var bounding = fadeElem.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          fadeElem.classList.add('active');
        }
      }
    }
    
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
  
    checkPosition();
  });
  
  function switchForm(form) {
    if (form === 'maylis') {
        document.getElementById('maylisForm').style.display = 'block';
        document.getElementById('amielForm').style.display = 'none';
        document.getElementById('maylisButton').classList.add('active-button');
        document.getElementById('maylisButton').classList.remove('inactive-button');
        document.getElementById('amielButton').classList.add('inactive-button');
        document.getElementById('amielButton').classList.remove('active-button');
    } else if (form === 'amiel') {
        document.getElementById('maylisForm').style.display = 'none';
        document.getElementById('amielForm').style.display = 'block';
        document.getElementById('maylisButton').classList.add('inactive-button');
        document.getElementById('maylisButton').classList.remove('active-button');
        document.getElementById('amielButton').classList.add('active-button');
        document.getElementById('amielButton').classList.remove('inactive-button');
    }
}

document.addEventListener('DOMContentLoaded', function () {
  // Sélectionner tous les h3
  const headers = document.querySelectorAll('.divsecondscreenright h3');

  headers.forEach(header => {
      // Ajouter un écouteur d'événements pour chaque h3
      header.addEventListener('click', function () {
          // Sélectionner le prochain élément sibling (le contenu à afficher/masquer)
          let content = header.nextElementSibling;

          // Toggle de la classe active pour changer la flèche
          header.classList.toggle('active');

          // Toggle de l'affichage du contenu
          if (content.style.display === "none" || content.style.display === "") {
              content.style.display = "block";
          } else {
              content.style.display = "none";
          }
      });
  });
});


