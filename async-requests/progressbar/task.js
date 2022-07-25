document.forms.form.addEventListener('submit', (e) => {
	e.preventDefault();
	const xhr = new XMLHttpRequest();
	document.getElementById('send').onclick = function() {
		xhr.addEventListener('readystatechange', () => 
			if (xhr.readyState === xhr.DONE && xhr.status == 200) {
				xhr.upload.onprogress = function(event) {
					document.getElementById('progress').value = match.round(((event.loaded * 100) / event.total) / 100);
				}
			}
		})
	}
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(document.getElementById('file').files[0]);
});