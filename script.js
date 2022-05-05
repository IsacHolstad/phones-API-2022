const myApi = "http://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myApi;
console.log(myApi);

const containerWithPhones = document.querySelector(".container");


async function phoneNames() {
    try{
        const response = await fetch(corsFixUrl);
        console.log(response);
        const responseJSON = await response.json();
        //console.log(responseJSON);
        const phoneData = responseJSON.data;
        for (let i = 0; i < phoneData.length; i++) {
            console.log(phoneData[i])
            
            containerWithPhones.innerHTML += `<li>${phoneData[i]}</li>`
        }

    }
    catch(error) {
        containerWithPhones.innerHTML += `<li>there is an error happening</li>`
    }
}
phoneNames()


//add filter by search to searchbox in navigation top header


