



		const firstClassIncraseBtn = document.getElementById('firstClass-increaseBtn');
		firstClassIncraseBtn.addEventListener('click', function(){
			handleUpdatedNumber('firstClass-inputCount', true);			
		});

		const firstClassdecraseBtn = document.getElementById('firstClass-decreaseBtn');
		firstClassdecraseBtn.addEventListener('click', function(){
			handleUpdatedNumber('firstClass-inputCount', false);
		});


		// economy function
		const economyIncraseBtn = document.getElementById('economyIncrease-btn');
		economyIncraseBtn.addEventListener('click', function(){
			handleUpdatedNumber('economy-input-count', true);
		});

		const economydecraseBtn = document.getElementById('economyDecrease-btn');
		economydecraseBtn.addEventListener('click', function(){
			handleUpdatedNumber('economy-input-count', false);
		});



		function handleUpdatedNumber(id, isIncrease){
			const mainInput = document.getElementById(id);
			const mainInputValue = parseInt(mainInput.value);
			// const economyNewCount = economyCount-1;
			let economyNewCount = mainInputValue;
			if(isIncrease === true){
				economyNewCount = mainInputValue + 1;
			}
			if(isIncrease === false && economyNewCount>0 ){
				economyNewCount = mainInputValue - 1;
			}
			mainInput.value = economyNewCount;
			totalCalculate();
		};


		// function of total value
		function totalCalculate(){
			const sub_totalValue = document.getElementById('sub_total').innerText;

			const economyCount = getInputvalue('economy-input-count');
			const firstClassCount = getInputvalue('firstClass-inputCount');

			const subTotal = firstClassCount*150 + economyCount*100;
			document.getElementById('sub_total').innerText = '$'+ subTotal;
			const tax = subTotal*0.1;
			document.getElementById('tax').innerText = `$ ${ tax}`;
			document.getElementById('total-cost').innerText =  `$ ${ tax+subTotal}`;
		};
		
		//function of economy and firstClass input value
		function getInputvalue(id){			
			const currentInput = document.getElementById(id);
			const inputCountNumber = parseInt(currentInput.value);
			return inputCountNumber;
		};


    


