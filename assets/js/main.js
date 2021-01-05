function showForm(event){
	event.preventDefault();
	var contactInfo = document.getElementById("contact-info");
	var contactForm = document.getElementById("contact-form");
	contactForm.style.display = "block";
	contactInfo.style.display = "none";
}
function showUserInfo(event){
	event.preventDefault();
	var contactInfo = document.getElementById("contact-info");
	var contactForm = document.getElementById("contact-form");
	contactForm.style.display = "none";
	contactInfo.style.display = "block";
}