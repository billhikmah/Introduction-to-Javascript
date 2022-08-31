const change = (input)=>{
    if(typeof input !== "string"){
        return "Input harus berupa string"
    }
    const p = input.length - 1;
    let output = "";

    for(i=0; i<=p; i++){
        if(input[i] === "a"){
            output = output + "o";
            continue
        }
        output = output + input[i]
    }
    return output
};

const teks = "Jakarta";
// const teks = "Code"
// const teks = 123
const cetak = change(teks);
console.log(`\n${cetak}\n`)