const myApi = "https://api-mobilespecs.azharimm.site/v2/brands";
console.log(myApi);

const containerWithPhones = document.querySelector(".container");


async function phoneNames() {
    try{
        const response = await fetch(myApi);
        console.log(response);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const phoneData = responseJSON.data;
        for (let i = 0; i < phoneData.length; i++) {
            //console.log(phoneData[i].brand_name)
            if (i === 55) {
                break
            }
            containerWithPhones.innerHTML += `<li class="phonenamesli"><a href="phonedetails.html?id=$">${phoneData[i].brand_name}</a></li>`
        }

    }
    catch(error) {
        containerWithPhones.innerHTML += `<li>there is an error happening</li>`
    }
}
phoneNames()


//add filter by search to searchbox in navigation top header
const searchBar = document.querySelector(".searchbar");
console.log(searchBar);

