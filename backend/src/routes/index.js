const { Router } = require('express');
const router = Router();
//conection bdds
//const pool = require("../../db");


//home
router.get('/', (req, res) => {
    res.send({'title':'/'});
});
router.get('/home', async(req, res) => {
    res.send({'title':'home'});
});


//USER
router.post('/register', async(req, res) => {
    //const {user, pass}=req.body;
    res.send({'title':'register'});
});
router.post('/login', async(req, res) => {
    //const {user, pass}=req.body;
    res.send({'title':'login'});
});


//CRUD para las reseñas
//CREATE - crear
router.post('/create', async(req, res) => {
    res.send({'title':'create'});
});
//READ - leer
router.post('/read', async(req, res) => {
    res.send({'title':'read'});
});
//UPGRADE - cambiar/mejorar/editar
router.put('/upgrade', async(req, res) => {
    res.send({'title':'upgrade'});
});
//DELETE - borrar
router.delete('/delete', async(req, res) => {
    res.send({'title':'delete'});
});

module.exports = router;