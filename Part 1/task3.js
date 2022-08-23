//Deklarasi dan Assignment
let printSquare = 7;
let square = "";

//Validasi
if (typeof printSquare !== "number"){
    console.log("Data harus number")
} else if(printSquare <= 0) {
    console.log("Data tidak valid")
} else {

//Proses
    for (let s = 1; s <= printSquare; s = s + 1){           // s = baris
        for (let t = 1; t <= printSquare; t = t + 1){       // t = posisi

            if(s === 1 && printSquare !== 1){               // Pengondisian baris pertama
                if(t !== printSquare){
                    square = square + "* "
                }
                if(t === printSquare){
                    square = square + "*\n"
                }
            }

            if(s !== 1 && s !== printSquare){               // Pengondisian baris bukan pertama dan terakhir
                if(t === 1){
                    square = square + "* "
                }
                if(t !== 1 && t !== printSquare){
                    square = square + "  "
                }
                if(t === printSquare){
                    square = square + "*\n"
                }
            }

            if(s === printSquare){                          // Pengondisian baris terakhir
                if (t !== printSquare) {
                    square = square + "* "
                }
                if (t === printSquare) {
                    square = square + "*"
                }
            }
        }
    }

//Output   
    console.log(square);
}
