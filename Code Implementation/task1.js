const deteksiPalindrom = (input)=>{
    if(typeof input !== "string"){
        return "Input harus berupa string"
    }
    const word = input.toLowerCase();
    for(i=0; i<word.length; i++){
        const p = word.length - 1;
        if(word[i] !== word[p-i]){
            return "bukan palindrom";
        }
    };
    return "palindrom";
};

const teks = "Kasur kakak rusak";
// const teks = "palindrom"
// const teks = ["coba"]
const cetak = deteksiPalindrom(teks);
console.log(cetak);