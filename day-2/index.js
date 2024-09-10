const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var tarifmotor = 2000
var tarifmobil = 4000

rl.question("masukan jenis kendaraan anda ? ", function(jenisKendaraan){
    rl.question("Jam Berapa anda masuk",function(jamMasuk) {
        rl.question("Jamberapa anda keluar? ",function(jamKeluar){
            var jmlparkir = jamKeluar - jamMasuk
            if(jenisKendaraan == "motor"){
                console.log("tarif parkir anda : ",jmlparkir*tarifmotor)
            }else{
                console.log("tarif parkir anda : ",jmlparkir*tarifmobil)
            }
            rl.close();
        });

    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});