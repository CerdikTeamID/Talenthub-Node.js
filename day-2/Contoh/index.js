const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tarifMotor = 2000
const tarifMobil = 5000

rl.question("Masukkan jenis kendaraan anda ? ", function(jenisKendaraan) {
    rl.question("jam berapa anda masuk parkiran? ", function(jamMasuk) {
        rl.question("jam berapa anda keluar parkiran? ", function(jamKeluar) {
            var jumlahJamParkir = jamKeluar - jamMasuk
            if(jenisKendaraan == "motor") {
                console.log("Tarif anda:", jumlahJamParkir * tarifMotor)
            }else{
                console.log("Tarif anda:", jumlahJamParkir * tarifMobil)
            }
            rl.close();
        })
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});