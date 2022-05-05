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
        //sconsole.log(phoneData)
        for (let i = 0; i < phoneData.length; i++) {
           //console.log(phoneData[i].brand_name)
            if(i === 100) {
                break
            }
            
            containerWithPhones.innerHTML += `<li>${phoneData[i].brand_name}</li>`
        }

    }
    catch(error) {
        containerWithPhones.innerHTML += `<li>there is an error happening</li>`
    }
}
phoneNames()


//add filter by search to searchbox in navigation top header


