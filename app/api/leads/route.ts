import { NextResponse } from 'next/server';
import { readDB, writeDB } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const db = await readDB();
    return NextResponse.json({ leads: db.leads });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read database' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const db = await readDB();
    
    db.leads.push({
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString()
    });
    
    await writeDB(db);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to write to database' }, { status: 500 });
  }
}
