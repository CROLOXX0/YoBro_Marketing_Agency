import { NextResponse } from 'next/server';
import { readDB } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const db = await readDB();
    
    // Find user in leads (treating leads as registered users)
    const user = db.leads.find((l: any) => l.email === email && l.password === password);
    
    if (user) {
      const dbCode = db.discountSettings?.code || "yobro2026";
      const hasDiscount = user.code && user.code.trim().toLowerCase() === dbCode.trim().toLowerCase();
      return NextResponse.json({ success: true, hasDiscount });
    }
    
    return NextResponse.json({ success: false, error: "Invalid email or password" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
