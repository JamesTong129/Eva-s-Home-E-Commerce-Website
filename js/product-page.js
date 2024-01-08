//!!!------------------- js for product page ---------------!!!//

//----------js for toggle menu---------------//
//When the user clicks on the button, toggle between hiding and showing the dropdown content //
function dropDown() {
  document.getElementById("categoryDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
	  var openDropdown = dropdowns[i];
	  if (openDropdown.classList.contains('show')) {
		openDropdown.classList.remove('show');
	  }
	}
  }
}


//----------js for view more & less------------//
		function viewMore() {
		var dots = document.getElementById("dots");
		var moreCollections = document.getElementById("more");
		
		if (dots.style.display === "none") {
		dots.style.display = "flex";
		moreCollections.style.display = "none";
		} else {
		dots.style.display = "none";
		moreCollections.style.display = "flex";
		}
		}


