const sortir = (input)=>{
    let container = [];
    let output = [];
    if(typeof input !== "number"){
        return "Input harus berupa number!"
    };
    let arr = input.toString().split("");
    let p = arr.length

    for(i=0; i<p; i++){
        if(arr[i] !== "0"){
            container = container.concat(arr[i]);
            continue;
        }
        output = output.concat(container.sort());
        container = [];
    };

    output = output.concat(container.sort()).join("");
    output = Number(output);
    return output;
};

const integer = 5956560159466056;
const cetak = sortir(integer);

console.log(`\n${cetak}\n`); // hasil yang diharapkan: 55566914566956