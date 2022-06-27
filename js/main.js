let map;

function initMap() {

    let loc = { lat: 6.639759361325995, lng: 3.3207512658057023 }
  map = new google.maps.Map(document.getElementById("map"), {
    center: loc ,
    zoom: 14,
  });

  const marker = new google.maps.marker ({location:loc, map:map})
}

  // Add smooth scrolling to all links
  $("#navbar a, .btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 800, 
      
      );
    } // End if
  });
