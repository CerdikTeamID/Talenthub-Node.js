const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Angka = ", function(num1) {
    rl.question("Masukan Angka =  ", function(num2) {
        rl.question("Pilih Jenis Operasi Hitung ( + || - || * || /) ", function(hitung) {
            var hasil;
            let num1Int = parseInt(num1);
            let num2Int = parseInt(num2);

            if (hitung == '+') {
                hasil = num1Int + num2Int;
                console.log("Hasil dari penjumlahan = ", hasil);
            } else if (hitung == '-') {
                hasil = num1Int - num2Int;
                console.log("Hasil dari pengurangan = ", hasil);
            } else if (hitung == '*') {
                hasil = num1Int * num2Int;
                console.log("Hasil dari perkalian = ", hasil);
            } else if (hitung == '/') {
                if (num2Int != 0) {
                    hasil = num1Int / num2Int;
                    console.log("Hasil dari pembagian = ", hasil);
                } else {
                    console.log("Error: Tidak bisa dibagi dengan 0!");
                }
            } else {
                console.log("Salah Input. Silakan masukan Angka dengan benar.");
            }
            rl.close();
        });
    });
});

rl.on("close", function() {
    console.log("\n terimakasih !!!");
    process.exit(0);
});