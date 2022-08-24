//Declare & Assignment
const key = "an";
const limit = 3;
const source = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"]

//Proses
const memilah = function(key, limit, callback){
    const mencari = callback(key, source);
    if(mencari.length === 0){
        return "Data tidak ditemukan"
    }
    return mencari.slice(0,limit)
}
const menyaring = function(kunci, sumber){
    return sumber.filter((elemen)=>{
        return elemen.toLowerCase().match(kunci.toLowerCase()); 
        }
    )
}

//Output
console.log(memilah(key, limit, menyaring))

