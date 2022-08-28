const cariData = (tautan, kunci)=>{
    return new Promise((resolve)=>{
        fetch(tautan)
            .then((response)=>response.json())
            .then((result)=>{
                const list = result.map(a=>`- ${a[kunci]}`).join("\n")
                console.log(`Berikut adalah daftar ${key} yang ditemukan:\n${list}`);
            });
    })
}

const url = 'https://jsonplaceholder.typicode.com/users/';
const key = 'name';

cariData(url, key);