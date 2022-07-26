const xhr = new XMLHttpRequest();
const loaderElement = document.querySelector('.loader');
const items = document.getElementById('items');

xhr.onload = function() {
	if (xhr.status == 200) {
		let resp = JSON.parse(xhr.responseText);
		loaderElement.classList.toggle('loader_active');
		const valutes = Object.values(resp.response['Valute']);
		for (let valute of valutes) {
			let valuteItemsForm = '<div class="item"><div class="item__code">' + valute["CharCode"] + '</div><div class="item__value">' + valute["Value"] + '</div><div class="item__currency">руб.</div></div>';
			items.insertAdjacentHTML('afterBegin', valuteItemsForm);
		}
	} else {
		loaderElement.classList.toggle('loader_active');
		alert("Запрос не удался");
	} 
}

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.send();