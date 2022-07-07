"use strict";

const isDate = text => 
{
    // Regular expressions for valid date
    const datePattern = /^[0-1]?\d\/[0-3]\d\/\d{4}$/;

    // Validate the date
	if ( ! datePattern.test(text) ) 
    { 
        return false; 
    }
	
	const index1 = text.indexOf( "/" );
	const index2 = text.indexOf( "/", index1 + 1 );
	const month = parseInt( text.substring( 0, index1 ) );
	const day = parseInt( text.substring( index1 + 1, index2 ) );
	
	if( month < 1 || month > 12 ) 
    { 
		return false; 
	} 
    else 
    {
        switch(month) 
        {
            case 2:
                return (day > 28) ? false : true;
            case 4:
            case 6:
            case 9:
            case 11:
                return (day > 30) ? false : true;
            default:
                return (day > 31) ? false : true;
        }
    }
};

$(document).ready( () => 
{
    // This function validates user entries. If valid, then the valid values will be saved into session storage and the page will
    // be navigated to profile.html
    $( "#save" ).click( () => 
    {
        // Clear any previous error messages
        $("span").text("");   

        // Initialize isValid flag
        let isValid = true;   
        
        // Get the values entered by the user
        const email = $("#email").val();
        const phone = $("#phone").val();
        const zip = $("#zip").val();
        const dob = $("#dob").val();

        // Regular expressions for valid values
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const zipPattern = /^\d{5}(-\d{4})?$/;
        
        // Validate the user values. If Invalid, print an error message
        if ( email === "" || !email.match(emailPattern ) )
        {
            isValid = false;
            $("#email").next().text(`Please enter a valid email`);
        }
        if ( phone === "" || !phone.match(phonePattern) ) 
        {
            isValid = false;
            $("#phone").next().text("Please enter a phone number in NNN-NNN-NNNN format.");
        }
        if ( zip === "" || !zip.match(zipPattern) ) 
        {
            isValid = false;
            $("#zip").next().text("Please enter a valid zip code.");
        }
        if ( dob === "" || !isDate(dob) ) 
        {
            isValid = false;
            $("#dob").next().text("Please enter a valid date in MM/DD/YYYY format.");
        }
        // Save the valid values in the email, phone, zip, and dob constants to session storage
        if (isValid) 
        { 
            sessionStorage.setItem("validEmail", email);
            sessionStorage.setItem("validPhone", phone);
            sessionStorage.setItem("validZip", zip);
            sessionStorage.setItem("validDob", dob);

            // Navigate to profile.html
            location = "profile.html";
        }
        
        $("#email").focus(); 
    });

    // This function is called to clear all the values entered by the user
    $("#clear").click( () => 
    {
        $("#email").val("");
        $("#phone").val("");
        $("#zip").val("");
        $("#dob").val("");
    });

    // Set focus on initial load
    $("#email").focus();
}); 