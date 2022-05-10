const myApi = "https://api-mobilespecs.azharimm.site/v2/brands";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myApi;
console.log(myApi);

const containerWithPhones = document.querySelector(".container");


async function phoneNames() {
    try{
        const response = await fetch(corsFixUrl);
        console.log(response);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const phoneData = responseJSON.data;
        for (let i = 0; i < phoneData.length; i++) {
            if(i === 100) {
                break
            }
            
            containerWithPhones.innerHTML += `<li><a href="detail.html?id=${phoneData[i].brand_id}">${phoneData[i].brand_name}</li>`
        }

    }
    catch(error) {
        containerWithPhones.innerHTML += `<li>there is an error happening</li>`
    }
}
phoneNames()


//add filter by search to searchbox in navigation top header


