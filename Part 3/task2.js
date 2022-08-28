const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        if (!error) {
            callback(null, month)
        } else {
            callback (new Error("Sorry Data Not Found"), [])
        }
    }, 100);
}

const showMonth = (pesan, daftar) => {
    if (daftar.length > 0){
        console.log("\nNama-nama bulan dalam Kalender Gregorian:");
        const list = daftar.map(e=>"- "+ e + '\n');
        const pisah = list.join("");

        return console.log(pisah);
    }
    return console.log(`\n${pesan.message}\n`);
}

getMonth(showMonth);