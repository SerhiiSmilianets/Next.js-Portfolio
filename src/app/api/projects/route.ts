import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { Project } from '@/interfaces';

const filePath = path.join(process.cwd(), '/src/data/data.json');

const readData = (): Project[] => {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

export async function GET() {
  const data = readData();
  return NextResponse.json(data);
}
