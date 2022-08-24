// 10 Method Javascript(Built-in Functions).

//1.JavaScript String match()
/*Metode match() mencocokkan string dengan RegEx,
mengembalikan array dengan kecocokan, dan mengembalikan null
jika tidak ada kecocokan yang ditemukan. */
const baju = "saya suka baju ini";
const suka = baju.match(/suka/);
// console.log(suka);

//2. Javascript String search()
/*Metode search() mencocokkan string dengan RegEx, mengembalikan indeks (posisi)
dari kecocokan pertama dan mengembalikan -1 jika tidak ada kecocokan yang ditemukan*/
const sayur = "brokoli bagus untuk kesehatan";
const makan = sayur.search(/bagus/);
// console.log(makan);

//3. JavaScript String toLowerCase()
/* Method toLowerCase() mengonversi string menjadi huruf kecil
tanpa mengubah string aslinya.*/
const marah = "SUDAH CUKUP!"
const biasa = marah.toLowerCase();
// console.log(biasa);

//4.JavaScript String toUpperCase()
/* Method toUpperCase() mengonversi string menjadi huruf besar
tanpa mengubah string aslinya.*/
const ujian = "dokumen negara bersifat rahasia";
const un = ujian.toUpperCase()
// console.log(un);

//5. JavaScript Array concat()
/* Method concat() menggabungkan (menggabungkan) dua atau lebih array,
mengembalikan array baru, berisi array yang digabungkan,
dan tidak mengubah array yang ada. */
const film = ["Interstellar", "The Outfit", "Fantastic Beasts"]
const series = ["Vincenzo", "Kingdom", "Dark"]
const favorites = film.concat(series);
// console.log(favorites);

//6. JavaScript Number toString()
/* Method toString() mengonversi angka menjadi string: */
const num = 30;
let alfb = num.toString(10);
// console.log(alfb);

//7. JavaScript Array pop()
/*Method pop() mengembalikan nilai yang "dikeluarkan"
mengeluarkan elemen terakhir dari suatu array. */
const subject = ["science", "math", "english", "art", "history"];
const popS = subject.pop();
// console.log(subject);
// console.log(popS);

//8. JavaScript Array splice()
/* Method splice() dapat digunakan untuk menambahkan item baru ke array */
const provinsi = ["Banten", "Bangka Belitung", "Jawa Utara", "Kalimantan Barat"];
const hapusProvinsi = provinsi.splice(2,1, "Jawa Barat", "Lampung");
// console.log(provinsi);
// console.log(hapusProvinsi);

//9. JavaScript Array slice()
/*Method slice() mengiris sepotong array menjadi array baru.
dan tidak menghapus elemen apa pun dari array sumber. */
const warna = ["merah", "hijau", "biru", "ungu", "jingga", "nila", "kuning"];
const rgbColor = warna.slice(0, 3)
// console.log(warna);
// console.log(rgbColor);

//10. Javascript String replace()
/*Method replace() menggantikan nilai yang ditentukan dengan
nilai lain dalam sebuah string*/
let keenam = "Presiden Indonesia sekarang adalah Bapak SBY";
let ketujuh = keenam.replace("SBY", "Jokowi");
// console.log(ketujuh);
// console.log(keenam);
