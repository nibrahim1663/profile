"use strict";

$(document).ready( () => 
{
	// Retrieve the profile information from session storage and displays it in the span elements 
	// whose id attributes are “email”, “phone”, “zip”, and “dob
	const validEmail = sessionStorage.getItem("validEmail");
	const validPhone = sessionStorage.getItem("validPhone");
	const validZip = sessionStorage.getItem("validZip");
	const validDob = sessionStorage.getItem("validDob");

	// Display data from session storage
	$("#email").text(validEmail);
	$("#phone").text(validPhone);
	$("#zip").text(validZip);
	$("#dob").text(validDob);
	
	$("#back").click( () => 
	{
		history.back();

	}); // end of click()
	
}); // end of ready()