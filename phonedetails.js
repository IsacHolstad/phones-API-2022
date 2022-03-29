const detailApi = "https://api-mobilespecs.azharimm.site/v2/brands";
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
            if(i === 50) {
                break
            }
            
            phoneContainer.innerHTML += `<li class="detailslistHT">${phoneS[i].brand_slug} ${phoneS[i].brand_name}</li>`
        }

    }catch(error) {
        phoneContainer.innerHTML += `<h1>there is an major error happening<h1>`
        
    }
}
detailContainer()