const xhr = new XMLHttpRequest();
const poolTitle = document.querySelector('.poll__title');
const pollAnswers = document.getElementById('poll__answers');
const elementsModalMain = document.getElementsByClassName('modal').modal_main;
const pollAnswer = document.getElementsByClassName('poll__answer');

xhr.onload = function() {
	if (xhr.status == 200) {
		let resp = JSON.parse(xhr.responseText);
		poolTitle.innerText = resp.data.title;
		for (let btnText of resp.data.answers) {
			let btnForm = '<button class="poll__answer" style="margin-right: 3px;">' + btnText + '</button>';
			pollAnswers.insertAdjacentHTML('afterBegin', btnForm)
		}
		Array.from(pollAnswer).forEach(pool => {
			addEventListener("click", () => {
				elModal();
				document.querySelector('.card').style = 'display: none;'
			})
		})
	} else {
		alert("Запрос не удался");
	} 
}

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

function elModal() {
	document.querySelector("div.modal__close.modal__close_times").onclick = () => document.getElementById('modal_main').style = "display: none";
	elementsModalMain.className = 'modal modal_active';	
};