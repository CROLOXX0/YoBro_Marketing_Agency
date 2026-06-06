import { NextResponse } from 'next/server';
import { readDB, writeDB } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const db = await readDB();
    return NextResponse.json({ discountSettings: db.discountSettings || { code: "Yobro2026", percentage: 10 } });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read database' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const db = await readDB();
    
    db.discountSettings = {
      code: body.code,
      percentage: Number(body.percentage)
    };
    
    await writeDB(db);
    return NextResponse.json({ success: true, discountSettings: db.discountSettings });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update database' }, { status: 500 });
  }
}
