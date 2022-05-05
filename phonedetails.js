const queryString = document.location.search;
const detailApi = `http://api-mobilespecs.azharimm.site/v2/brands/{br}`;
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + detailApi;
console.log(detailApi);

const phoneContainer = document.querySelector(".container");


async function detailContainer() {
    try {
        const response = await fetch(corsFixUrl);
        console.log(response);
        const responseJSON = await response.json(); // convert the response to json data
        console.log(responseJSON)
        const phoneS = responseJSON.data;
        console.log(phoneS)
        for (let i = 0; i < phoneS.length; i++) {
            console.log(phoneS[i].phones)
            if(i === 50) {
                break
            }
            
            phoneContainer.innerHTML += `<li class="detailslistHT">${phoneS[i].brand_slug}</li>`
        }

    }catch(error) {
        phoneContainer.innerHTML += `<h1> error happening<h1>`
        
    }
}
detailContainer();