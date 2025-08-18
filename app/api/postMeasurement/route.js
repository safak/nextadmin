import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    const { waterLevel, waterTemp, airTemp, airHumidity, airPressure, windSpeed, curahHujan, date } = await req.json();
  
    try {
      const newMeasurement = await prisma.measurement.create({
        data: {
          waterLevel,
          windSpeed,
          airTemp,
          airHumidity,
          airPressure,
          waterTemp,
          curahHujan,
          date: date ? new Date(date) : new Date(),
        },
      });
      return new Response(JSON.stringify(newMeasurement), {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Failed to save data" }), {
        status: 500,
      });
    }
  }