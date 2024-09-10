// main router file
const express = require('express');
const router = express.Router();

// import controller from another file
// const controller_user = require('./user')

/* route init */
router.get('/', function(req, res, next) {
    res.send("Welcome to Lapor Pak");
});
// contoh coding
router.post('/tambah', function(req,res){
    const angka1 = parseInt(req.body.angka1)
    const angka2 = parseInt(req.body.angka2)
    res.json({
        hasil: angka1 + angka2
    })
})

// Luas segitiga
router.post('/segitiga', function(req,res){
    const alas = parseInt(req.body.alas)
    const tinggi = parseInt(req.body.tinggi)
    res.json({
        luas: (alas * tinggi) / 2
    })
})
// Luas Lingkaran
router.post('/lingkaran', function(req,res){
    const alas = parseInt(req.body.alas)
    const tinggi = parseInt(req.body.tinggi)
    res.json({
        luas: (alas * tinggi) / 2
    })
})

//Luas-trapesium
router.post('/trapesium', function(req, res) {
    const alasAtas = parseInt(req.body.alasAtas);
    const alasBawah = parseInt(req.body.alasBawah);
    const tinggi = parseInt(req.body.tinggi);
    res.json({
      luas: (alasAtas + alasBawah) * tinggi / 2
    });
  })

//Luas-belah-ketupat
  router.post('/belah-ketupat', function(req, res) {
    const diagonal1 = parseInt(req.body.diagonal1);
    const diagonal2 = parseInt(req.body.diagonal2);
    res.json({
      luas: (diagonal1 * diagonal2) / 2
    });
  })

//   Luas-jajaran-genjang
  router.post('/jajaran-genjang', function(req, res) {
    const alas = parseInt(req.body.alas);
    const tinggi = parseInt(req.body.tinggi);
    res.json({
      luas: alas * tinggi
    });
  })

//   luas-layang-layang
  router.post('/layang-layang', function(req, res) {
    const diagonal1 = parseInt(req.body.diagonal1);
    const diagonal2 = parseInt(req.body.diagonal2);
    res.json({
      luas: (diagonal1 * diagonal2) / 2
    });
  })
  
  //luas-segi-lima
  router.post('/segi-lima', function(req, res) {
    const s = parseInt(req.body.s);
    const sqrt5 = Math.sqrt(5);
    res.json({
      luas: (Math.sqrt(5 * (5 + 2 * sqrt5)) * (s ** 2)) / 4
    });
  })
  
  // luas-segi-enam
  router.post('/segi-enam', function(req, res) {
    const s = parseInt(req.body.s);
    const sqrt3 = Math.sqrt(3);
    res.json({
      luas: (3 * sqrt3 * (s ** 2)) / 2
    });
  })

  //luas-segi-delapan
  router.post('/luas-segi-delapan', function(req, res) {
    const s = parseInt(req.body.s);
    const cot = 1 / Math.tan(Math.PI / 8);
    res.json({
      luas: (2 + 4/cot) * (s ** 2)
    });
  })


/* example call controller */
// router.use('/user', controller_user)

module.exports = router;