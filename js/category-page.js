//----------js for toggle menu----------------//
// When the user clicks on the button, toggle between hiding and showing the dropdown content //
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

	var MenuItems = document.getElementById("MenuItems")
	MenuItems.style.maxHeight = "0px";
	function menutoggle(){
		if (MenuItems.style.maxHeight == "0px")
			{
				MenuItems.style.maxHeight = "1000px";
				MenuItems.style.height = "670px";
			}
		else{
				MenuItems.style.maxHeight = "0px";
			}

	}

//-------------------------accordion js-------------------------//
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
				if (panel.style.display === "grid") {
				  panel.style.display = "none";
				} else {
				  panel.style.display = "grid";
				}
		});
	}
	
	
//----------js for sorting by buttons--------------------------//

const CategoryList = document.getElementById('categoryList');
const highestPricedBtn = document.getElementById('HighestP');
const lowestPricedBtn = document.getElementById('LowestP');
const itemsPerPage = 16;
let currentPage = 1;
const prevPageBtn = document.getElementsByClassName('prePage');
const nextPageBtn = document.getElementsByClassName('nextPage');

highestPricedBtn.addEventListener('click', sortProductsHighest);
lowestPricedBtn.addEventListener('click', sortProductsLowest);

function sortProductsHighest() {
  const products = Array.from(CategoryList.querySelectorAll('.col-4'));

  products.sort(function(a, b) {
    const aPrice = parseFloat(a.querySelector('.unitPrice').textContent);
    const bPrice = parseFloat(b.querySelector('.unitPrice').textContent);

    return bPrice - aPrice;
  });

  CategoryList.innerHTML = '';
  products.forEach(function(product) {
    CategoryList.appendChild(product);
  showItems(currentPage, products);
  updatePagination(products);
  });
}

function sortProductsLowest() {
	const products = Array.from(CategoryList.querySelectorAll('.col-4'));

  products.sort(function(a, b) {
    const aPrice = parseFloat(a.querySelector('.unitPrice').textContent);
    const bPrice = parseFloat(b.querySelector('.unitPrice').textContent);

    return aPrice - bPrice;
  });

  CategoryList.innerHTML = '';
  products.forEach(function(product) {
    CategoryList.appendChild(product);
  showItems(currentPage, products);
  updatePagination(products);
  });
}
		

const popularBtn = document.getElementById('Popular');
popularBtn.addEventListener('click', sortProductsPopular);

function sortProductsPopular() {
  const products = Array.from(CategoryList.querySelectorAll('.col-4'));

  products.sort(function(a, b) {
    const aSold = parseFloat(a.querySelector('.soldNum').textContent);
    const bSold = parseFloat(b.querySelector('.soldNum').textContent);

    return bSold - aSold;
  });

  CategoryList.innerHTML = '';
  products.forEach(function(product) {
    CategoryList.appendChild(product);
  showItems(currentPage, products);
  updatePagination(products);
  });
}
		
		
//from a to z sorting & z to a sorting//
const AtoZBtn = document.getElementById('AtoZ');
const ZtoABtn = document.getElementById('ZtoA');

AtoZBtn.addEventListener('click', sortProductsAtoZ);
ZtoABtn.addEventListener('click', sortProductsZtoA);

function sortProductsAtoZ() {
  const products = Array.from(categoryList.querySelectorAll('.col-4'));

  products.sort(function(a, b) {
    const aName = a.querySelector('.productName').textContent;
    const bName = b.querySelector('.productName').textContent;

    return aName.localeCompare(bName);
  });

  categoryList.innerHTML = '';
  products.forEach(function(product) {
    categoryList.appendChild(product);
  showItems(currentPage, products);
  updatePagination(products);
  });
}

function sortProductsZtoA() {
	
  const products = Array.from(categoryList.querySelectorAll('.col-4'));

  products.sort(function(a, b) {
    const aName = a.querySelector('.productName').textContent;
    const bName = b.querySelector('.productName').textContent;

    return bName.localeCompare(aName);
  });

  categoryList.innerHTML = '';
  products.forEach(function(product) {
    categoryList.appendChild(product);
  showItems(currentPage, products);
  updatePagination(products);
  });
}
	


// Get all the product elements


// Get the minimum and maximum price inputs
const minPriceInput = document.querySelector("#minPrice");
const maxPriceInput = document.querySelector("#maxPrice");
const goBtn = document.querySelector("#goBtn");
// Add event listener to the inputs

goBtn.addEventListener("click", filterProducts);


// Filter products based on price range
function filterProducts() {
	const Allproducts = Array.from(CategoryList.querySelectorAll('.col-4'));
  const filteredProducts = [];
  const minPrice = parseFloat(minPriceInput.value);
  const maxPrice = parseFloat(maxPriceInput.value);
  Allproducts.forEach((product) => {
    const price = parseFloat(product.querySelector(".unitPrice").innerText);
    if (price >= minPrice && price <= maxPrice) {
      filteredProducts.push(product);
    }
  });
  CategoryList.innerHTML = '';
  filteredProducts.forEach(product => CategoryList.appendChild(product));
  currentPage = 1;
  showItems(currentPage, filteredProducts);
  updatePagination(filteredProducts);
}
const products = Array.from(CategoryList.querySelectorAll('.col-4'));
showItems(currentPage, products);
updatePagination(products);

//----------js for page navigator buttons------- //

function showItems(page, products) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  for (let i = 0; i < products.length; i++) {
    if (i >= startIndex && i < endIndex) {
      products[i].style.display = 'block';
    } else {
      products[i].style.display = 'none';
    }
  }
}

function updatePagination(products) {
	const totalPage = Math.ceil(products.length / itemsPerPage);
	
  if (currentPage === 1) {
	  for (var i = 0; i < prevPageBtnLength ; i++) {
		  prevPageBtn[i].disabled = true;
	  }
    
  } else {
   	  for (var i = 0; i < prevPageBtnLength ; i++) {
		  prevPageBtn[i].disabled = false;
	  }
  }
  if (currentPage === totalPage) {
	  for (var i = 0; i < nextPageBtnLength ; i++) {
		   nextPageBtn[i].disabled = true;
	  }
  } else {
	   for (var i = 0; i < nextPageBtnLength ; i++) {
		   nextPageBtn[i].disabled = false;
	   } 
  }
}
const totalPage = Math.ceil(products.length / itemsPerPage);
let totalP1 = totalPage;
let totalP2 = totalPage;
let currentP1 = currentPage;
let currentP2 = currentPage;
document.querySelector('#totalP1').textContent = totalP1;
document.querySelector('#totalP2').textContent = totalP2;
document.querySelector('#currentP1').textContent = currentP1;
document.querySelector('#currentP2').textContent = currentP2;
var  nextPageBtnLength= nextPageBtn.length;
var  prevPageBtnLength= prevPageBtn.length;

for (var i = 0; i < prevPageBtnLength ; i++) {
	prevPageBtn[i].addEventListener('click', () => {
	const newProducts = Array.from(CategoryList.querySelectorAll('.col-4'));
  	currentPage--;
	currentP1 = currentPage;
		currentP2 = currentPage;
	document.querySelector('#currentP1').textContent = currentP1;
	document.querySelector('#currentP2').textContent = currentP2;

showItems(currentPage, newProducts);
updatePagination(newProducts);

});
}

for (var i = 0; i < nextPageBtnLength ; i++) {
	nextPageBtn[i].addEventListener('click', () => {
	const newProducts = Array.from(CategoryList.querySelectorAll('.col-4'));
  	currentPage++;
	currentP1 = currentPage;
		currentP2 = currentPage;
	document.querySelector('#currentP1').textContent = currentP1;
		document.querySelector('#currentP2').textContent = currentP2;
	showItems(currentPage, newProducts);
	updatePagination(newProducts);

});
		
}

