document.forms.form.addEventListener('submit', (e) => {
	e.preventDefault();
	const xhr = new XMLHttpRequest();
	xhr.upload.onprogress = function(event) {
		document.getElementById('progress').value = (event.loaded / event.total);
	}
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(document.getElementById('file').files[0]);
});