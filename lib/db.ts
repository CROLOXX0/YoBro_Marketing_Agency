import fs from 'fs/promises';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data.json');

export async function readDB() {
  try {
    const data = await fs.readFile(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return { 
      leads: [], 
      pricing: { 
        trial: { name: "One-Week Trial", price: 1999, period: "week" }, 
        starter: { name: "Starter", price: 7000, period: "mo" }, 
        growth: { name: "Growth", price: 10000, period: "mo" }, 
        premium: { name: "Premium", price: 10000, period: "mo" } 
      },
      discountSettings: {
        code: "Yobro2026",
        percentage: 10
      },
      portfolio: [],
      pages: [],
      blogs: []
    };
  }
}

export async function writeDB(data: any) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf8');
}
