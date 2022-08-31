const ArkFood = (harga, voucher, jarak, pajak)=>{
    let potongan = 0;
    let biayaAntar = 5000;
    let biayaPajak = 0;
    let total = 0;

// Validasi
    if(typeof harga !== "number"){
        return "Harga harus berupa number!";
    }
    if(typeof jarak !== "number" || jarak <= 0){
        return "Jarak harus berupa number dan lebih besar dari 0!";
    }
    if(typeof pajak !== "boolean"){
        return "Pajak harus berupa boolean!";
    }
    if(voucher !== "FAZZFOOD50" && voucher !== "DITRAKTIR60" && voucher !== null){
        return "Voucher tidak valid";
    }

// Proses
    if(voucher === "FAZZFOOD50"){
        if(harga<=50*1000){
            return "Voucher tidak dapat digunakan, pesanan belum memenuhi jumlah minimum pembelian";
        }
        potongan = harga * 50 / 100;
        if(potongan >= 50 * 1000){
            potongan = 50 * 1000;
        }
    }
    if(voucher === "DITRAKTIR60"){
        if(harga<=25*1000){
            return "Voucher tidak dapat digunakan, pesanan belum memenuhi jumlah minimum pembelian";
        }
        potongan = harga * 60 / 100;
        if(potongan >= 30 * 1000){
            potongan = 30 * 1000;
        }
    }

    if(jarak >= 2){
        biayaAntar = ((5 * 1000) + ((Math.ceil(jarak) - 2) * 3 * 1000));
    }

    if(pajak === true){
        biayaPajak = 5 / 100 * harga;
    }

    total = harga - potongan + biayaAntar + biayaPajak;

// Output
    const cetak = `
    Harga = ${harga}
    Potongan = ${potongan}
    Biaya Antar = ${biayaAntar}
    Pajak = ${biayaPajak}

    Total = ${total}
    `

    return cetak;
}

const inputHarga = 100000;
const inputVoucher = "FAZZFOOD50";
// const inputVoucher = "DITRAKTIR60";
const inputJarak = 10;
const inputPajak = false;

const struk = ArkFood(inputHarga, inputVoucher, inputJarak, inputPajak)
console.log(`\n${struk}\n`);
