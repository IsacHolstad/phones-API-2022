console.log("hello")


var someArray = [1, 2, 3, 4, 5, 6];
console.log("the numbers: ", someArray);


const iPhone =[{
    brand: "apple",
    Storage: "500GB",
    camera: "4K",
    length: 14.73,
}]
for (let i = 0; i < iPhone.length; i++) {
    console.log("detials about the phone: ", iPhone[i].brand)
}
console.log("phone detials: ", iPhone);

function add(x) {
    return function (y) {
        return x + y;
    }
}
console.log("the answear is: ", add(3)(4)); //7
//advanced from hesh
function sum(x) {
    // first time
    //                0  + 3 = 3

    // second time
    //           3  + 5 = 8

    // third time
    //           8 + 228 = 236
    sum.isac = (sum.isac || 0) + x;
    return sum.isac;

}

console.log("answear to question 1:", sum(3)); // 3
console.log("answear to question 2:", sum(5)); // 8
console.log("answear to question 3:", sum(228)); // 236

console.log(Math.PI)