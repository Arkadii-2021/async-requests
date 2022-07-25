const xhr = new XMLHttpRequest();
const preLoaderGif = document.getElementsByClassName('loader loader_active')[0];
const items = document.getElementById('items');

xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE) {
		let resp = JSON.parse(xhr.responseText);
		preLoaderGif.classList.toggle('loader_active');
		const valutes = Object.values(resp.response['Valute']);
		for (let valute of valutes) {
			let valuteItemsForm = '<div class="item"><div class="item__code">' + valute["CharCode"] + '</div><div class="item__value">' + valute["Value"] + '</div><div class="item__currency">руб.</div></div>'
			items.insertAdjacentHTML('afterBegin', valuteItemsForm);
		}
	} 
});

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.send();