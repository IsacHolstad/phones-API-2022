const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id')


const detailApi = `https://api-mobilespecs.azharimm.site/v2/brands/${id}`;
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + detailApi;


const phoneContainer = document.querySelector(".container");


async function detailContainer() {
    try {
        const response = await fetch(corsFixUrl);
        console.log(response);
        const phoneS = await response.json(); // convert the response to json dat
        console.log(phoneS)
            
            phoneContainer.innerHTML = `<li>${phoneS[i].brand_name}</li>`
        

    }catch(error) {
        phoneContainer.innerHTML = `<h1>404<h1>`
        
    }
}
detailContainer();