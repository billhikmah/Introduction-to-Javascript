//Data
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:{
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org", 
}
 
//Deklarasi
let newAdministrator = {
    name: "Bill Hikmah",
    email: "Billhikmah1@yahoo.co.id",
    Hobby: ["Watching", "Reading", "Drawing"],
}

//Proses
data = {...data, ...newAdministrator}
const {street, city} = data.address

//
console.log(data);
console.log(street);
console.log(city);
