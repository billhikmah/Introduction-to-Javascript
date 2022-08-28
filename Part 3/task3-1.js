//Program Undian Kaget

const undianKaget = (luckyNumber) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const kodeUndian = [2105, 9821, 1007, 1307, 7301, 0973];
            let cek = kodeUndian.find((nomorUndian)=>{
                return nomorUndian === luckyNumber
            })
            if (cek) {
                resolve(luckyNumber)
            } else {
                reject(luckyNumber)
            }
        }, 1000)
    })
}

const cekUndian = async (nomor) => {
    try {
      const result = await undianKaget(nomor);
      console.log(`\n\n${result} \nSelamat anda memenangkan undian 100 juta rupiah!`);
    } catch (error) {
      console.log(`\n\n${error} \nAnda belum beruntung!`);
    } finally {
      console.log(`Ikuti terus Undian Kaget untuk hadiah lainnya~\n\n`);
    }
};
cekUndian(2105);