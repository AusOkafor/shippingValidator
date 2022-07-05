let submitItems = document.getElementById('submit');
const error = document.querySelector('#errormessage');
let message = "Your field cannot be blank";




let countryUrl = 'https://restcountries.com/v3.1/region/africa';



submitItems.addEventListener('click', (e) => {
    let fName = document.getElementById('fname').value;
    let lName = document.getElementById('lname').value;
    let countryName = document.getElementById('country').value;
    let itemShipped = `Items were successfully shipped. Thank you ${fName} for shopping with us`


     if (fName == "" || countryName == "" || lName == "") {
            error.classList = "alert alert-danger";
            error.innerHTML = message;
     } else{
        error.classList = "alert alert-success";
        error.innerHTML = itemShipped;
     }
    
  
        

     fetch(countryUrl).then(country => country.json()).then((data) => {

         const nonShippingCountries = data;
         
       for (let i = 0; i < nonShippingCountries.length; i++) {
            let element = nonShippingCountries[i].name.common;
        let countriesInput = JSON.stringify(countryName).toLowerCase();
           if (countriesInput.includes(element)) {
            let nonShippingCountries = `Sorry we currently dont ship to ${element}`
            error.classList = "alert alert-primary";
            error.innerHTML = nonShippingCountries;
           }

       }  
     })



   e.preventDefault()
});
