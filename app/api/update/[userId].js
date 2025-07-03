// pages/api/update/[userId].js
import pool from '@/utils/db';

export default async function handler(req, res) {
    const { userId } = req.query;

    if (req.method === 'PUT') {
        // Ambil data dari request body
        const { username, email, password, role, status } = req.body;

        try {
            // Buat koneksi ke database
            const connection = await pool.getConnection();

            // Query untuk memperbarui data pengguna (tanpa phone dan address)
            const [result] = await connection.execute(
                `UPDATE users 
                 SET username = ?, email = ?, password = ?, role = ?, status = ?
                 WHERE id = ?`,
                [username, email, password, role, status, userId]
            );

            // Lepas koneksi setelah selesai
            connection.release();

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json({ message: 'User updated successfully' });
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({ message: 'Error updating user', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
