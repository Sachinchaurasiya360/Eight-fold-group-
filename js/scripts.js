 document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get the values from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Prepare the email parameters
    const emailParams = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send("service_erc7ipd", "template_83d4mw9", emailParams)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("There was an error sending your message. Please try again.");
      });
  });






// Attach the function to the form submit event
document.getElementById('enquiry-form').addEventListener('submit', sendEmail);

//SEARCH
const search = document.getElementById('search');
const searchBar = document.getElementById('searchBar');
//click on the Magnifier icon to toggle the search bar
search.addEventListener('click', function (){
    searchBar.classList.toggle('show')
    searchBar.classList.toggle('hide')
})
//press escape to close the search bar
 document.addEventListener('keydown', (event) => {
     var keyName = event.key;
     console.log("keyName");
     if ((keyName == 'Escape' && searchBar.classList.contains('show') == true)) {
            searchBar.classList.toggle('show')
            searchBar.classList.toggle('hide')    
         }
 } )

