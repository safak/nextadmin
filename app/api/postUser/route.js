import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    const { username, email, password, role, status } = await req.json();

    try {
        // Menambahkan user baru ke tabel users
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password, // Pastikan untuk meng-hash password sebelum menyimpannya
                role,
                status,
            },
        });

        // Mengembalikan respon sukses dengan data user yang baru ditambahkan
        return new Response(JSON.stringify({ message: 'User added successfully', user: newUser }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        // Mengembalikan respon error jika terjadi kesalahan
        return new Response(JSON.stringify({ error: 'Failed to add user' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    } finally {
        // Menutup koneksi Prisma setelah operasi selesai
        await prisma.$disconnect();
    }
}
