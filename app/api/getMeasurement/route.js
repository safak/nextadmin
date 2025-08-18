import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const measurements = await prisma.measurement.findMany({
      orderBy: {
        date: 'desc' // Urutkan berdasarkan tanggal terbaru ke terlama
      }
    });
    return new Response(JSON.stringify(measurements), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
