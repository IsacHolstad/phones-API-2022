const detailApi = "https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48";
console.log(detailApi);

const phoneContainer = document.querySelector(".container");

console.log(phoneContainer);

async function detailContainer() {
    try {
        const response = await fetch(detailApi);
        console.log(response);
        const responseJSON = await response.json(); // convert the response to json data
        console.log(responseJSON)
        const phoneS = responseJSON.data;
        console.log(phoneS)
        for (let i = 0; i < phoneS.length; i++) {
            console.log(phoneS[i].phones)
            
            phoneContainer.innerHTML += `<li>${phoneS[i].phones}</li>`
        }

    }catch(error) {
        phoneContainer.innerHTML += `<h1>there is an major error happening<h1>`
        
    }
}
detailContainer()