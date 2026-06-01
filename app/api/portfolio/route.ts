import { NextResponse } from 'next/server';
import { readDB, writeDB } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const db = await readDB();
    return NextResponse.json({ portfolio: db.portfolio || [] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read database' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const db = await readDB();
    
    db.portfolio = body; // Expects the full updated array
    
    await writeDB(db);
    return NextResponse.json({ success: true, portfolio: db.portfolio });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update database' }, { status: 500 });
  }
}
