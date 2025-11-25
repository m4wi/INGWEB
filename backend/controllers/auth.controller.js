import { UserModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";
const SECRET_KEY = "ingweb1"; // mejor usar .env

export class AuthController {
    static async login(req, res) {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ error: 'Faltan datos: email y password' });
        }
        try {

            const user = await UserModel.findByCredentials(email, password);
            console.log(req.body);
            if (!user) {
                return res.status(401).json({ error: 'Credenciales inválidas' });
            }

            const token = jwt.sign(
                { id: user.id_usuario},
                SECRET_KEY,
                { expiresIn: "1h" }
            );

            res.json({
                message: 'Inicio de sesión exitoso',
                user: user,
                token
            });
        } catch (error) {
            res.status(500).json({ error: 'Error al iniciar sesión' });
        }

    }
}