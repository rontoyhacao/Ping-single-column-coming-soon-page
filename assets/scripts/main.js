const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const emailValue = email.value.trim();
	
	if(emailValue == '') {
		setErrorFor(email, 'Please enter an email address');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Please provide a valid email address');
	} else {
		setSuccessFor(email, 'Email address sent! We will have you notified');
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('.emailValidate');
	formControl.className = 'form-inputContainer error';
	small.innerText = message;
}

function setSuccessFor(input, message) {
	const formControl = input.parentElement;
    const small = formControl.querySelector('.emailValidate');
	formControl.className = 'form-inputContainer success';
    small.innerText = message;
	form.reset();
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/.test(email);
}

