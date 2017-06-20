// Handler for form submit event
function loginFormSubmitHandler() {
	// Preventing submit event from going further 
	//   a. like calling other submit event listener and 
	//   b. stopping form to get submitted internally to action attributes value  
	event.preventDefault();

	// Data validation
	var usernameValidated = validateUsername();
	var passwordValidated  = validatePassword();

	if (!usernameValidated) {
		// Invalid username alert
		alert("username is invalid");
	}
	else if (!passwordValidated) {
		// Invalid password alert
		alert("password is invalid");
	}
	else {
		// Form submit as validation successful
		var loginForm = document.getElementById("loginForm");
		loginForm.setAttribute("action", "success.html");
		loginForm.setAttribute("method", "GET");
		loginForm.submit();
	}
}

// Validates username input
function validateUsername() {
	// get trimmed userName
	var username = document.getElementById("username").value;
	var trimmedUsername = trim(username);

	// validate username's max length and non-empty
	return validateMaxLength(trimmedUsername.length, 10) &&
		validateNonEmpty(trimmedUsername);
}

// Validate password input
function validatePassword() {
	// No need to trim password as password can have starting and ending spaces
	var password = document.getElementById("password").value;

	// validate password max length, non empty, non-number
	return validateMaxLength(password.length, 8) &&
		validateNonEmpty(password) &&
		validateNonNumber(password);
}

// Compares length vs maxLength
function validateMaxLength(length, maxLength) {
	return length <= maxLength;
}

// Validates that value is not empty
function validateNonEmpty(value) {
	return trim(value).length >= 1;
}

// Validates that value is not a number
function validateNonNumber(value) {
	return isNaN(value);
}

// Removes extra spaces from start and end of value
function trim(value) {
	// ^\s+ means one or more than one spaces at start
	// \s+$ means one or more than one spaces at end
	// ^\s+|\s+$ means one or more than one spaces at start or end.
	return value.replace(/^\s+|\s+$/, "");
}
