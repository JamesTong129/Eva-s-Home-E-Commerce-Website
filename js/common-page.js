// JavaScript for common webpage//

/*-----------------------------------js for shopping record indicator--------------------------*/
		var cartAmount = sessionStorage.getItem("CARTAMOUNT");
	document.querySelector('#cartAmount').innerText = cartAmount;

/*-----------------------------------js for toggle menu--------------------------*/

	function dropDown() {
	  document.getElementById("categoryDropdown").classList.toggle("show");
		MenuItems.style.height = "670px";
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

	var MenuItems = document.getElementById("MenuItems")
	MenuItems.style.maxHeight = "0px";
	function menutoggle(){
		if (MenuItems.style.maxHeight == "0px")
			{
				MenuItems.style.maxHeight = "700px";
				MenuItems.style.height = "270px";
			}
		else{
				MenuItems.style.maxHeight = "0px";
				MenuItems.style.height = "270px";
			}

	}


/*-----------------------------------js for search system--------------------------*/
	const input = document.querySelector('.search-input');
	const searchList = document.querySelector('.search-list');
	const originalHTML = searchList.innerHTML;

	input.addEventListener('input', function() {
	const keyword = input.value.trim().toLowerCase();
	const results = Array.from(searchList.children);
	let found = false;

	if (keyword === '') {
	searchList.innerHTML = originalHTML;
	searchList.style.display = 'none';
	} else {
	results.forEach(result => {
	  const nameElement = result.querySelector('span');
	  if (nameElement !== null) { // check if span element exists
		const name = nameElement.textContent.toLowerCase();
		if (name.includes(keyword)) {
		  result.style.display = 'flex';
		  found = true;
		} else {
		  result.style.display = 'none';
		}
	  }
	});

	if (found) {
	  searchList.style.display = 'block';
	} else {
	  searchList.innerHTML = '<div class="search-result" id="noResult">Result not found</div>';
	  searchList.style.display = 'block';
	}
	}
	});

