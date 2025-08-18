import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        // Mengambil semua pengguna dari tabel users
        const users = await prisma.user.findMany();

        // Mengembalikan respon JSON dengan data pengguna
        return NextResponse.json(users);
    } catch (error) {
        console.error(error);
        // Mengembalikan respon JSON dengan status error
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        // Menutup koneksi Prisma setelah selesai
        await prisma.$disconnect();
    }
}
