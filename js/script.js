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