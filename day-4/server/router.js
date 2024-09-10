// main router file
const express = require('express');
const router = express.Router();

// import controller from another file
// const controller_user = require('./user')

/* route init */
router.get('/', function(req, res, next) {
    res.send("Welcome to lapor pak");
});
router.get('/imam', function(req,res){
    res.json({
        nama: "imam",
        usia: 17
    })
})
router.get('/ilham-budi', function(req,res){
    res.json({
        nama: req.query.nama,
        usia: req.query.usia
    })
})
router.post('/tambah', function(req,res){
    const angka1 = parseInt(req.body.angka1)
    const angka2 = parseInt(req.body.angka2)
    res.json({
        hasil: angka1 + angka2
    })
})

/* example call controller */
// router.use('/user', controller_user)

module.exports = router;