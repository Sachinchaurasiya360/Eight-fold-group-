// Handle form submission
document.getElementById("enquiry-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch('https://eightfoldgroup.in/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Message sent successfully!");
        } else {
            alert("Server is facing some issues. Please call us instead.");
        }
    })
    .catch(error => {
        document.getElementById("status").innerHTML = "An error occurred.mm";
        console.error("Error:", error);
    });
});
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

