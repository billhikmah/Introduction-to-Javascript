//Deklarasi
let inputBahasaIndonesia;
let inputBahasaInggris;
let inputMatematika;
let inputIpa;

//Assignment
const bahasaIndonesia = 80;
const bahasaInggris = 90;
const matematika = 89;
const ipa = 69;

//Validasi
if (typeof bahasaIndonesia !== "number" || bahasaIndonesia > 100 || bahasaIndonesia < 0){
  console.log("Input nilai Bahasa Indonesia invalid!");
  inputBahasaIndonesia = false;
} else {inputBahasaIndonesia = true;};

if (typeof bahasaInggris !== "number" || bahasaInggris > 100 || bahasaInggris < 0 ){
  console.log("Input nilai Bahasa Inggris invalid!");
  inputBahasaInggris = false;
} else {inputBahasaInggris = true;};

if (typeof matematika !== "number" || matematika > 100 || matematika < 0 ){
  console.log("Input nilai Matematika invalid!");
  inputMatematika = false;
} else {inputMatematika = true;};

if (typeof ipa !== "number" || ipa > 100 || ipa < 0){
  console.log("Input nilai IPA invalid!");
  inputIpa = false;
} else {inputIpa = true;};

//Proses
if( inputBahasaIndonesia === true && inputBahasaInggris === true && inputMatematika === true && inputIpa === true){
  const rataRata = (bahasaIndonesia + bahasaInggris + matematika + ipa) / 4;
  if (rataRata >= 90) {
  console.log("Rata-rata = " + rataRata + "\nGrade = A");
  } else if (rataRata >= 80){
  console.log("Rata-rata = " + rataRata + "\nGrade = B");
  } else if (rataRata >= 70){
  console.log("Rata-rata = " + rataRata + "\nGrade = C");
  } else if (rataRata >= 60){
  console.log("Rata-rata = " + rataRata + "\nGrade = D");
  } else {
  console.log("Rata-rata = " + rataRata + "\nGrade = E");
  };
};
