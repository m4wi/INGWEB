
import { GreenpointChat } from '../models/greenpointChat.js'

export class ChatController {

    // Enviar mensaje
    static async sendMessage(req, res) {
        try {
            const { chat_id } = req.params;
            const { content } = req.body;
            const sender_id = req.user?.id_user;

            if (!sender_id) return res.status(401).json({ error: 'No autorizado' });
            if (!content) return res.status(400).json({ error: 'Contenido requerido' });

            const chatId = parseInt(chat_id, 10);
            if (isNaN(chatId)) return res.status(400).json({ error: 'ID de chat inválido' });

            // Validar que el usuario pertenezca al chat
            const isInChat = await GreenpointChatMessage.isUserInChat(chatId, sender_id);
            if (!isInChat) {
                return res.status(403).json({ error: 'No perteneces a este chat' });
            }

            const message = await GreenpointChatMessage.insertMessage(chatId, sender_id, content);
            res.status(201).json(message);
        } catch (err) {
            console.error('Error al enviar mensaje:', err);
            res.status(400).json({ error: err.message || 'Error al enviar mensaje' });
        }
    };

    // Editar mensaje
    static async editMessage(req, res) {
        try {
            const { id } = req.params; // id del mensaje
            const { content } = req.body;
            const sender_id = req.user?.id_user;

            if (!sender_id) return res.status(401).json({ error: 'No autorizado' });
            if (!content) return res.status(400).json({ error: 'Contenido requerido' });

            const messageId = parseInt(id, 10);
            if (isNaN(messageId)) return res.status(400).json({ error: 'ID de mensaje inválido' });

            const updated = await GreenpointChatMessage.updateMessage(messageId, sender_id, content);
            if (!updated) {
                return res.status(404).json({ error: 'Mensaje no encontrado o no tienes permiso' });
            }

            res.json(updated);
        } catch (err) {
            console.error('Error al editar mensaje:', err);
            res.status(400).json({ error: err.message || 'Error al editar mensaje' });
        }
    };

    // Eliminar mensaje
    static async deleteMessage(req, res) {
        try {
            const { id } = req.params;
            const sender_id = req.user?.id_user;

            if (!sender_id) return res.status(401).json({ error: 'No autorizado' });

            const messageId = parseInt(id, 10);
            if (isNaN(messageId)) return res.status(400).json({ error: 'ID de mensaje inválido' });

            const deleted = await GreenpointChatMessage.deleteMessage(messageId, sender_id);
            if (!deleted) {
                return res.status(404).json({ error: 'Mensaje no encontrado o no tienes permiso' });
            }

            res.json({ message: 'Mensaje eliminado' });
        } catch (err) {
            console.error('Error al eliminar mensaje:', err);
            res.status(500).json({ error: 'Error al eliminar mensaje' });
        }
    };
}