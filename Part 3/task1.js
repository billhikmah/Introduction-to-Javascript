const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 100)
    })
}

// cekHariKerja('senin')
//     .then((result) => {
//         return console.log(`\nHari ${result} adalah hari kerja\n`);
//     })
//     .catch((error) => {
//         return console.log(`\n${error.message}\n`);
//     });


/* Then-Catch
1.  Fungsi handler ini dihubungkan oleh promise untuk menentukan aksi yang akan dilakukan.
2.  Jika promise menghasilkan callback yang memanggil parameter pertama, maka akan diteruskan ke statement
    then dan melakukan logikanya.
3.  Jika promise menghasilkan callback yang memanggil parameter kedua, maka akan diteruskan ke statement
    catch dan melakukan logikanya.
4.  Parameter kedua bukanlah suatu keharusan.*/

    
// const cekHariIni = async (hari) => {
//     try {
//       const result = await cekHariKerja(hari);
//       console.log(`\nHari ${result} adalah hari kerja`);
//     } catch (error) {
//       console.log(`\n${error.message}`);
//     } finally {
//       console.log("Enjoy your day!\n");
//     }
// };
// cekHariIni("minggu");

/* Try-Catch-Finally
1.  Fungsi handler ini dihubungkan oleh promise untuk menentukan aksi yang akan dilakukan.
2.  Try-Catch-Finally digunakan untuk mengatasi error jika menggunakan fungsi async-await.
3.  Async digunakan untuk fungsi return pada promise agar fungsi seakan-akan adalah synchronous.
4.  Await digunakan fungsi menunggu promise tidak lagi pada kondisi pending atau selesai.
5.  Try digunakan untuk menjalankan kode jika promise berada pada state fulfilled.
6.  Catch digunakan untuk menjalankan kode jika terjadi error pada block try akibat promise yang rejected.
7.  Finally digunakan untuk menjalankan kode apapun hasil dari promise.*/