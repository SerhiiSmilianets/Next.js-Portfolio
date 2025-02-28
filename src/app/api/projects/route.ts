import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), '/src/data/projects.json');

interface Project {
    id: string;
    project_name: string;
    start_date: string;
    end_date: string;
    link: string;
    logo: string;
    general_information: string;
    responsibilities: string;
}

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
