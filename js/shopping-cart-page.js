//!!!--------------js for shopping cart page--------------!//

function totalCalc(){
		// Get all the elements with the id "sub"
		const subTotals = document.querySelectorAll('.cartSubTotal');

		// Initialize a variable to store the total sum
		let total = 0;
		// Loop through each "sub" element and add its value to the total
		subTotals.forEach(subTotal => {
		total += parseFloat(subTotal.textContent.slice(1));
		});

		// Set the value of the "total" element to the calculated sum
		const totalElement = document.querySelector('#totalNum');
		totalElement.textContent = total.toString();	
}
function totalCheck(){
const tbody = document.querySelector("#tbody");
const rows = tbody.querySelectorAll("tr").length;
	if( rows<=0){ 
		removeAll();
	} 
}

function removeAll(){
	const cartAmount = document.querySelector('#cartAmount');
	cartAmount.textContent = 0;
		var CartAmount = document.querySelector('#cartAmount').innerText;
	sessionStorage.setItem("CARTAMOUNT", CartAmount);
	const tbody = document.querySelector("#tbody");
	const allTr = tbody.querySelectorAll("tr")
	for(i=0; i<allTr.length; i++){
		allTr[i].parentNode.removeChild(allTr[i]);
	}
	clearTotal();
	removeAllStorageItem();
}
		
function removeAllStorageItem(){
var garbageItems = ['buttonClicked1', 'buttonClicked2','buttonClicked3','buttonClicked4', 'buttonClicked5', 'buttonClicked6', 
					'buttonClicked7', 'buttonClicked8', 'buttonClicked9', 'buttonClicked10', 'buttonClicked11', 'buttonClicked12', 
					'buttonClicked13', 'buttonClicked14', 'buttonClicked15', 'buttonClicked16', 'buttonClicked17', 'buttonClicked18', 
					'buttonClicked19', 'buttonClicked20', 
					
					'PRODUCTNAME1', 'PRODUCTNAME2', 'PRODUCTNAME3', 'PRODUCTNAME4','PRODUCTNAME5','PRODUCTNAME6','PRODUCTNAME7',
					'PRODUCTNAME8','PRODUCTNAME9','PRODUCTNAME10','PRODUCTNAME11','PRODUCTNAME12','PRODUCTNAME13','PRODUCTNAME14',
					'PRODUCTNAME15','PRODUCTNAME16','PRODUCTNAME17','PRODUCTNAME18','PRODUCTNAME19','PRODUCTNAME20',
					
					'QUANTITY1', 'QUANTITY2','QUANTITY3','QUANTITY4','QUANTITY5','QUANTITY6','QUANTITY7','QUANTITY8','QUANTITY9','QUANTITY10',
			'QUANTITY11','QUANTITY12','QUANTITY13','QUANTITY14','QUANTITY15','QUANTITY16','QUANTITY17','QUANTITY18','QUANTITY19','QUANTITY20',
					
					'PRODUCTIMG1', 'PRODUCTIMG2', 'PRODUCTIMG3','PRODUCTIMG4','PRODUCTIMG5','PRODUCTIMG6','PRODUCTIMG7','PRODUCTIMG8',
					'PRODUCTIMG9','PRODUCTIMG10','PRODUCTIMG11','PRODUCTIMG12','PRODUCTIMG13','PRODUCTIMG14','PRODUCTIMG15','PRODUCTIMG16',
					'PRODUCTIMG17','PRODUCTIMG18','PRODUCTIMG19','PRODUCTIMG20',
					'UNITPRICE1', 'UNITPRICE2','UNITPRICE3','UNITPRICE4','UNITPRICE5','UNITPRICE6','UNITPRICE7','UNITPRICE8','UNITPRICE9',
					'UNITPRICE10','UNITPRICE11','UNITPRICE12','UNITPRICE13','UNITPRICE14','UNITPRICE15','UNITPRICE16','UNITPRICE17','UNITPRICE18','UNITPRICE19','UNITPRICE20',
					'CARTAMOUNT'
				   
				   ];

garbageItems.forEach(function(Item) {
	  sessionStorage.removeItem(Item);
	});
}
function cartAmountUpdate(){
	const rows = tbody.querySelectorAll("tr").length;
	const cartAmount = document.querySelector('#cartAmount');
	cartAmount.textContent = rows;
	var CartAmount = document.querySelector('#cartAmount').innerText;
	sessionStorage.setItem("CARTAMOUNT", CartAmount);
	return;
}
function clearTotal(){
	let total =0;
	const totalElement = document.querySelector('#totalNum');
	totalElement.textContent = total.toString();
}

if (sessionStorage.getItem('buttonClicked1') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME1')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity1" value="${sessionStorage.getItem('QUANTITY1')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice1">${sessionStorage.getItem('UNITPRICE1')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG1')}" width="80px">`;
//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL1')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
 		newRow.innerHTML = `<tr id="tr1"></tr>`;
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal1"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity1');
		const unitPriceElem = document.getElementById('unitPrice1');
		const subTotalElem = document.getElementById('subTotal1');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
	  removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked1');
		sessionStorage.removeItem('PRODUCTNAME1');
		sessionStorage.removeItem('QUANTITY1');
		sessionStorage.removeItem('PRODUCTIMG1');
		//sessionStorage.removeItem('SUBTOTAL1'); 
		sessionStorage.removeItem('UNITPRICE1');
		totalCheck();
		totalCalc();
		});				 
	 	});
		cartAmountUpdate();
	});
	//-----------end--------//

}

if (sessionStorage.getItem('buttonClicked2') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME2')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity2" value="${sessionStorage.getItem('QUANTITY2')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice2">${sessionStorage.getItem('UNITPRICE2')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG2')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal2"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity2');
		const unitPriceElem = document.getElementById('unitPrice2');
		const subTotalElem = document.getElementById('subTotal2');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY2',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked2');
		sessionStorage.removeItem('PRODUCTNAME2');
		sessionStorage.removeItem('QUANTITY2');
		sessionStorage.removeItem('PRODUCTIMG2');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE2');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked3') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME3')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity3" value="${sessionStorage.getItem('QUANTITY3')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice3">${sessionStorage.getItem('UNITPRICE3')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG3')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal3"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity3');
		const unitPriceElem = document.getElementById('unitPrice3');
		const subTotalElem = document.getElementById('subTotal3');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY3',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked3');
		sessionStorage.removeItem('PRODUCTNAME3');
		sessionStorage.removeItem('QUANTITY3');
		sessionStorage.removeItem('PRODUCTIMG3');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE3');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
		
	  });

}

if (sessionStorage.getItem('buttonClicked4') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME4')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity4" value="${sessionStorage.getItem('QUANTITY4')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice4">${sessionStorage.getItem('UNITPRICE4')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG4')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal4"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity4');
		const unitPriceElem = document.getElementById('unitPrice4');
		const subTotalElem = document.getElementById('subTotal4');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY4',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked4');
		sessionStorage.removeItem('PRODUCTNAME4');
		sessionStorage.removeItem('QUANTITY4');
		sessionStorage.removeItem('PRODUCTIMG4');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE4');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked5') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME5')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity5" value="${sessionStorage.getItem('QUANTITY5')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice5">${sessionStorage.getItem('UNITPRICE5')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG5')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal5"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity5');
		const unitPriceElem = document.getElementById('unitPrice5');
		const subTotalElem = document.getElementById('subTotal5');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY5',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked5');
		sessionStorage.removeItem('PRODUCTNAME5');
		sessionStorage.removeItem('QUANTITY5');
		sessionStorage.removeItem('PRODUCTIMG5');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE5');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked6') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME6')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity6" value="${sessionStorage.getItem('QUANTITY6')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice6">${sessionStorage.getItem('UNITPRICE6')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG6')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal6"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity6');
		const unitPriceElem = document.getElementById('unitPrice6');
		const subTotalElem = document.getElementById('subTotal6');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY6',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked6');
		sessionStorage.removeItem('PRODUCTNAME6');
		sessionStorage.removeItem('QUANTITY6');
		sessionStorage.removeItem('PRODUCTIMG6');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE6');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked7') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME7')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity7" value="${sessionStorage.getItem('QUANTITY7')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice7">${sessionStorage.getItem('UNITPRICE7')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG7')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal7"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity7');
		const unitPriceElem = document.getElementById('unitPrice7');
		const subTotalElem = document.getElementById('subTotal7');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY7',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked7');
		sessionStorage.removeItem('PRODUCTNAME7');
		sessionStorage.removeItem('QUANTITY7');
		sessionStorage.removeItem('PRODUCTIMG7');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE7');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked8') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME8')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity8" value="${sessionStorage.getItem('QUANTITY8')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice8">${sessionStorage.getItem('UNITPRICE8')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG8')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal8"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity8');
		const unitPriceElem = document.getElementById('unitPrice8');
		const subTotalElem = document.getElementById('subTotal8');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY8',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked8');
		sessionStorage.removeItem('PRODUCTNAME8');
		sessionStorage.removeItem('QUANTITY8');
		sessionStorage.removeItem('PRODUCTIMG8');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE8');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked9') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME9')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity9" value="${sessionStorage.getItem('QUANTITY9')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice9">${sessionStorage.getItem('UNITPRICE9')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG9')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal9"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity9');
		const unitPriceElem = document.getElementById('unitPrice9');
		const subTotalElem = document.getElementById('subTotal9');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY9',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked9');
		sessionStorage.removeItem('PRODUCTNAME9');
		sessionStorage.removeItem('QUANTITY9');
		sessionStorage.removeItem('PRODUCTIMG9');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE9');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked10') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME10')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity10" value="${sessionStorage.getItem('QUANTITY10')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice10">${sessionStorage.getItem('UNITPRICE10')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG10')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal10"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity10');
		const unitPriceElem = document.getElementById('unitPrice10');
		const subTotalElem = document.getElementById('subTotal10');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY10',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked10');
		sessionStorage.removeItem('PRODUCTNAME10');
		sessionStorage.removeItem('QUANTITY10');
		sessionStorage.removeItem('PRODUCTIMG10');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE10');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked11') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME11')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity11" value="${sessionStorage.getItem('QUANTITY11')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice11">${sessionStorage.getItem('UNITPRICE11')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG11')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal11"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity11');
		const unitPriceElem = document.getElementById('unitPrice11');
		const subTotalElem = document.getElementById('subTotal11');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY11',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked11');
		sessionStorage.removeItem('PRODUCTNAME11');
		sessionStorage.removeItem('QUANTITY11');
		sessionStorage.removeItem('PRODUCTIMG11');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE11');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked12') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME12')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity12" value="${sessionStorage.getItem('QUANTITY12')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice12">${sessionStorage.getItem('UNITPRICE12')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG12')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal12"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity12');
		const unitPriceElem = document.getElementById('unitPrice12');
		const subTotalElem = document.getElementById('subTotal12');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY12',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked12');
		sessionStorage.removeItem('PRODUCTNAME12');
		sessionStorage.removeItem('QUANTITY12');
		sessionStorage.removeItem('PRODUCTIMG12');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE12');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked13') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME13')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity13" value="${sessionStorage.getItem('QUANTITY13')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice13">${sessionStorage.getItem('UNITPRICE13')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG13')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal13"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity13');
		const unitPriceElem = document.getElementById('unitPrice13');
		const subTotalElem = document.getElementById('subTotal13');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY13',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked13');
		sessionStorage.removeItem('PRODUCTNAME13');
		sessionStorage.removeItem('QUANTITY13');
		sessionStorage.removeItem('PRODUCTIMG13');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE13');
			totalCheck();
			totalCalc();
		});					 
	 	});
		cartAmountUpdate();	
	  });

}

if (sessionStorage.getItem('buttonClicked14') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME14')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity14" value="${sessionStorage.getItem('QUANTITY14')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice14">${sessionStorage.getItem('UNITPRICE14')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG14')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal14"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity14');
		const unitPriceElem = document.getElementById('unitPrice14');
		const subTotalElem = document.getElementById('subTotal14');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY14',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked14');
		sessionStorage.removeItem('PRODUCTNAME14');
		sessionStorage.removeItem('QUANTITY14');
		sessionStorage.removeItem('PRODUCTIMG14');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE14');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked15') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME15')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity15" value="${sessionStorage.getItem('QUANTITY15')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice15">${sessionStorage.getItem('UNITPRICE15')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG15')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal15"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity15');
		const unitPriceElem = document.getElementById('unitPrice15');
		const subTotalElem = document.getElementById('subTotal15');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY15',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked15');
		sessionStorage.removeItem('PRODUCTNAME15');
		sessionStorage.removeItem('QUANTITY15');
		sessionStorage.removeItem('PRODUCTIMG15');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE15');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked16') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME16')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity16" value="${sessionStorage.getItem('QUANTITY16')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice16">${sessionStorage.getItem('UNITPRICE16')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG16')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal16"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity16');
		const unitPriceElem = document.getElementById('unitPrice16');
		const subTotalElem = document.getElementById('subTotal16');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY16',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked16');
		sessionStorage.removeItem('PRODUCTNAME16');
		sessionStorage.removeItem('QUANTITY16');
		sessionStorage.removeItem('PRODUCTIMG16');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE16');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked17') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME17')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity17" value="${sessionStorage.getItem('QUANTITY17')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice17">${sessionStorage.getItem('UNITPRICE17')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG17')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal17"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity17');
		const unitPriceElem = document.getElementById('unitPrice17');
		const subTotalElem = document.getElementById('subTotal17');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY17',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked17');
		sessionStorage.removeItem('PRODUCTNAME17');
		sessionStorage.removeItem('QUANTITY17');
		sessionStorage.removeItem('PRODUCTIMG17');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE17');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked18') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME18')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity18" value="${sessionStorage.getItem('QUANTITY18')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice18">${sessionStorage.getItem('UNITPRICE18')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG18')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal18"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity18');
		const unitPriceElem = document.getElementById('unitPrice18');
		const subTotalElem = document.getElementById('subTotal18');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY18',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked18');
		sessionStorage.removeItem('PRODUCTNAME18');
		sessionStorage.removeItem('QUANTITY18');
		sessionStorage.removeItem('PRODUCTIMG18');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE18');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked19') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME19')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity19" value="${sessionStorage.getItem('QUANTITY19')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice19">${sessionStorage.getItem('UNITPRICE19')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG19')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal19"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity19');
		const unitPriceElem = document.getElementById('unitPrice19');
		const subTotalElem = document.getElementById('subTotal19');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY19',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked19');
		sessionStorage.removeItem('PRODUCTNAME19');
		sessionStorage.removeItem('QUANTITY19');
		sessionStorage.removeItem('PRODUCTIMG19');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE19');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}

if (sessionStorage.getItem('buttonClicked20') === 'true') {
	window.addEventListener('load', () => {
	// Call the function on page load
	const productName = `
	<style>
	.cartUnitPrice{
		margin-left:30px;
		margin-right:100px;
	}
	.cartSubTotal{
		margin-left:90px;
		margin-right:140px; 
	}
  	.remove-btn {
		border:2px solid red;
        background-color: transparent;
		align-items: center;
        color: red;
		font-size:20px;
		font-weight:200;
        padding: 0px 5px;
        cursor: pointer;
  	}
	.remove-btn:hover {
        background-color: red;
        color: white;
		font-weight:600;
  	}
	</style>
	<h4 class="cartProductName">${sessionStorage.getItem('PRODUCTNAME20')}</h4>`;
	const quantity =`<input  type="number" class="quantityInput" id="quantity20" value="${sessionStorage.getItem('QUANTITY20')}" min="1" max="99">` ;
	const unitPrice = `<h4 class="cartUnitPrice" id="unitPrice20">${sessionStorage.getItem('UNITPRICE20')}</h4>` ;
	const productImg = 	`<img src="${sessionStorage.getItem('PRODUCTIMG20')}" width="80px">`;
	//const subTotal =`<h4 class="cartSubTotal" id="subTotal">${sessionStorage.getItem('SUBTOTAL2')}</h4>` ;
		// Create a new row in the shopping cart table
		const newRow = document.createElement('tr');
		// Create cells for the row

		const imgCell = document.createElement('td');
		const productNameCell = document.createElement('td');
		const unitPriceCell = document.createElement('td');
		const quantityCell = document.createElement('td');
		const subTotalCell = document.createElement('td');
		
		const removeBtnCell = document.createElement('td');
		// Set the cell values
		productNameCell.innerHTML = productName;
		imgCell.innerHTML = productImg;
		unitPriceCell.innerHTML = unitPrice;
		quantityCell.innerHTML = quantity;
		subTotalCell.innerHTML = `<h4 class="cartSubTotal" id="subTotal20"></h4>`;
		
		removeBtnCell.innerHTML = `<button class="remove-btn">x</button>`;
		// Add the cells to the row
		newRow.appendChild(imgCell);
		newRow.appendChild(productNameCell);
		newRow.appendChild(unitPriceCell);
		newRow.appendChild(quantityCell);
		newRow.appendChild(subTotalCell);
		
		newRow.appendChild(removeBtnCell);
		// Add the row to the shopping cart table
		const cartTable = document.getElementById('cartTable');
		cartTable.querySelector('tbody').appendChild(newRow);
		
		
		// -----------Calculate the subtotal-----------------//
		const quantityElem = document.getElementById('quantity20');
		const unitPriceElem = document.getElementById('unitPrice20');
		const subTotalElem = document.getElementById('subTotal20');

		const quantityNum = parseInt(quantityElem.value);
		let SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantityNum;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
				
		totalCalc();
		// Add an event listener to the quantity input field
		quantityElem.addEventListener('input', () => {
		const quantity = parseInt(quantityElem.value);
		sessionStorage.setItem('QUANTITY20',quantity)
		SubTotal = parseFloat(unitPriceElem.textContent.slice(1)) * quantity;
		subTotalElem.textContent = '$' + SubTotal.toFixed(2);
		totalCalc();
		});

		
		//--------------remove btn & remove all btn---------------//
	  var removeBtns = document.querySelectorAll(".remove-btn");

	  // Add a click event listener to each remove button
		removeBtns.forEach(function (btn) {
		btn.addEventListener("click", function(){
		var tr = this.parentNode.parentNode;
		tr.parentNode.removeChild(tr);
		sessionStorage.removeItem('buttonClicked20');
		sessionStorage.removeItem('PRODUCTNAME20');
		sessionStorage.removeItem('QUANTITY20');
		sessionStorage.removeItem('PRODUCTIMG20');
		//sessionStorage.removeItem('SUBTOTAL2');
		sessionStorage.removeItem('UNITPRICE20');
			totalCheck();
			totalCalc();
		});					 
	 	});
		 cartAmountUpdate();
	  });

}