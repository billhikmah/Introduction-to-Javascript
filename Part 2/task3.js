//Declare
const batasAwal = 5 ;
const batasAkhir = 15;
const himpunan = [20, 18, 2, 7, 10,7, 12, 15, 1, 3, 5, 8, 13, 4, 14, 6, 19, 9, 11, 17, 10];
// const himpunan = [6, 7, 9, 13, 21]
// const himpunan = {firstName: "Bill", lastName:"Hikmah", Hobby:"Swimming", favColor:"blue", age:'"23'}
// const himpunan = [20, 18, 2, 15, 1, 3, 5, 4, 19, 17];


function seleksiNilai( nilaiAwal, nilaiAkhir, dataArray){       
    let keluaran = [];

 //Validasi
    if (typeof nilaiAwal !== "number"){
        keluaran.push("Batas Awal harus berupa number!")
    }

    if (typeof nilaiAkhir !== "number"){
        keluaran.push("Batas Akhir harus berupa number!")
    }

    if (!Array.isArray(dataArray)){
        keluaran.push("Himpunan harus berupa array!")
    } else if (dataArray.length <=5){
        keluaran.push("Jumlah elemen dalam himpunan harus lebih dari 5")
    }
    
    if (typeof nilaiAkhir === "number" && typeof nilaiAwal === "number" && nilaiAkhir <= nilaiAwal){
        keluaran.push("Batas akhir harus lebih besar daripada batas awal");
    }

    if (keluaran.length > 0){
        let tampil = "\n"
        for(i=0; i<keluaran.length; i= i + 1 ){
            tampil = tampil + keluaran[i] + "\n";
        };
        return tampil;
    }

    //Proses
    let hasilSeleksi = dataArray.filter(dataKu => {
        if (dataKu > nilaiAwal && dataKu < nilaiAkhir){
            return true;
            }
        }   
    );

    if (hasilSeleksi.length === 0){
        return "Tidak ada nilai yang sesuai pada rentang tersebut"
    };

    hasilSeleksi.sort((a, b) => a - b);
    return hasilSeleksi;
}
//Output
const percobaan = seleksiNilai(batasAwal, batasAkhir, himpunan);
console.log(percobaan);