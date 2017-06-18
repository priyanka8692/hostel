// Handler for form submit event
function loginFormSubmitHandler() {
	// Preventing submit event from going further 
	//   a. like calling other submit event listener and 
	//   b. stopping form to get submitted internally to action attributes value  
	event.preventDefault();

	// alerting that form submitted
  	alert("form submitted");
}