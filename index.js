const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const doublezero = document.getElementById('doublezero');
const square = document.getElementById('square')
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const devide = document.getElementById('devide');
const percentage = document.getElementById('percentage');
const newelement = document.getElementById('newelement');
const clear = document.getElementById('clear')

let storage = "";

mainfunction()
function mainfunction() {
	one.addEventListener('click', function(){
	storage += 1;
	newelement.textContent = storage
});
	two.addEventListener('click', function(){
	storage += 2;
	newelement.textContent	= storage;
});
	three.addEventListener('click', function(){
	storage += 3;
	newelement.textContent	= storage;
});
	four.addEventListener('click', function(){
	storage += 4;
	newelement.textContent	= storage;
});
	five.addEventListener('click', function(){
	storage += 5;
	newelement.textContent	= storage;
});
	six.addEventListener('click', function(){
	storage += 6;
	newelement.textContent	= storage;
});
	seven.addEventListener('click', function(){
	storage += 7;
	newelement.textContent	= storage;
});
	eight.addEventListener('click', function(){
	storage += 8;
	newelement.textContent	= storage;
});
	nine.addEventListener('click', function(){
	storage += 9;
	newelement.textContent	= storage;
});
	zero.addEventListener('click', function(){
	storage += 0;
	newelement.textContent	= storage;
});
	doublezero.addEventListener('click', function(){
	storage += "00";
	newelement.textContent	= storage;
});
	square.addEventListener('click', function(){
		try {
			const result = math.evaluate(storage);
			newelement.textContent = result;
			storage = result.toString();
		}catch (e){
			newelement.textContent = 'Error';
		}
	
});
	plus.addEventListener('click', function(){
	storage += "+";
	newelement.textContent	= storage;
});
	minus.addEventListener('click', function(){
	storage += "-"
	newelement.textContent	= storage;
});
	multiply.addEventListener('click', function(){
	storage += "*"
	newelement.textContent	= storage;
});
	devide.addEventListener('click', function(){
	storage += "/";
	newelement.textContent	= storage;
});
	percentage.addEventListener('click', function(){
	storage += "%";
	newelement.textContent	= storage;
});
	clear.addEventListener('click', function() {
	storage = "";
	newelement.textContent = storage;
	})
};
