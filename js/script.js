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
  