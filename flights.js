
function handleUpdatedNumber(id, isIncrease) {
	const mainInput = document.getElementById(id);
	const mainInputValue = parseInt(mainInput.value);
	let NewCountNumber = mainInputValue;
	if (isIncrease === true) {
		NewCountNumber = mainInputValue + 1;
	}
	if (isIncrease === false && NewCountNumber > 0) {
		NewCountNumber = mainInputValue - 1;
	}
	mainInput.value = NewCountNumber;
	totalCalculate();
};

// function of total value
function totalCalculate() {
	const economyCount = getInputvalue('economy-input-count');
	const firstClassCount = getInputvalue('firstClass-inputCount');

	const subTotal = firstClassCount * 150 + economyCount * 100;
	const tax = subTotal * 0.1;
	const totalCost = tax + subTotal;

	document.getElementById('sub_total').innerText = '$' + subTotal;
	document.getElementById('tax').innerText = `$ ${tax}`;
	document.getElementById('total-cost').innerText = totalCost;

};

//function of economy and firstClass input value
function getInputvalue(id) {
	const currentInput = document.getElementById(id);
	const inputCountNumber = parseInt(currentInput.value);
	return inputCountNumber;
};

// book now button addEventListener function
const bookNowBtn = document.getElementById('bookNow-btn');
bookNowBtn.addEventListener('click', function () {
	const economyCount = getInputvalue('economy-input-count');
	const firstClassCount = getInputvalue('firstClass-inputCount');

	const subTotal = firstClassCount * 150 + economyCount * 100;
	const tax = subTotal * 0.1;
	const totalCost = tax + subTotal;
	console.log(subTotal, tax, totalCost);

	document.getElementById('firstClass-display').innerText = ` First Class Ticket   = ${firstClassCount}`;
	document.getElementById('economy-display').innerText = ` Economy Class Ticket = ${economyCount}`;
	document.getElementById('subTotal-display').innerText = ` Subtotal             = ${subTotal}`;
	document.getElementById('tax-display').innerText = ` Ticket  Tax          = ${tax}`;
	document.getElementById('total-display').innerText = ` Total Cost           = ${totalCost}`;

	//emty total number Element
	document.getElementById('sub_total').innerText = '$ 00';
	document.getElementById('tax').innerText = '$ 00';
	document.getElementById('total-cost').innerText = '$ 00';
	//modal style
	document.getElementById('modal-display').style.display = 'block';

});

//modal addEventListener;		
function hiddenModal() {
	document.getElementById('modal-display').style.display = 'none';
}



