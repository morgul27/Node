//Importo solo el enrutador desde express
import { Router } from "express";
import { home, login, registro, insertUsers } from "../controllers/controllers.js";
import { pool } from "../db.js";

//Inicio de enrutador y almaceno en una constante
const router = Router();

//rutas
router.get('/', home);
router.get('/login', login);
router.get('/registro', registro);

router.get('/connect', async (req, res) =>{
    await pool.query('SELECT 1+1 AS RESULT')
res.json(result[0])
});

router.post('/auth', async (req, res) => {
    const { username, password } = req.body;
    const isOk = await isAuth(username, password);
    console.log(isOk);

    if (!username || !password || !isOk) {
      let errorMessage = "¡ESCRIBA UN USUARIO Y SU CONTRASEÑA!";
      if (isOk) errorMessage = "USUARIO y/o PASSWORD incorrectas";

      res.status(400).send(errorMessage);
    } else {
      res.status(200).send("¡LOGIN CORRECTO!");
    }
  });

router.post('/insertUsers', insertUsers)

const isAuth = (username, password) => {
    const res = pool.query('SELECT * FROM users WHERE nameuser=\'' + username + '\' AND pswd=\'' + password +'\'');
    return res;
}   

export default router;
