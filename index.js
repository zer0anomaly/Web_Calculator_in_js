const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');
const delbtn = document.getElementById('deletebutton')
const equal = document.getElementById('equal')
const ac = document.getElementById('acbutton')

let storage = []
let operatorstorage = ['+','-','*','/',]

buttons.forEach(button => {
	button.addEventListener('click',() => {
		let value = button.dataset.value
		if (!(operatorstorage.includes(storage[storage.length - 1]) && button.classList.contains('operator'))){
			storage.push(value)
			showfunction()
		}else{
		}
	})
})

delbtn.addEventListener('click', () => {
	storage.pop();
	showfunction()
})

function showfunction (){
	let numbers = storage.join("");
	display.textContent = numbers;
}
equal.addEventListener('click',() => {
	if (storage.length > 1){
		let numbers = storage.join("");
		let result = Function(`return ${numbers}`)();
		storage.length = 0;
		storage.push(result);
		display.textContent = storage
	}else{
		display.textContent = storage
	}
})

ac.addEventListener('click', () => {
	storage.length = 0;
	display.textContent = ''
})