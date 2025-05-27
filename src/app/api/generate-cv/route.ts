import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const CV_DIR = path.join(process.cwd(), 'public', 'cv');

export async function GET() {   
  const cvEnvFileName = process.env.CV_FILE_NAME;

  //in case not generated file is going to be used
  if (cvEnvFileName) {
    if (fs.existsSync(path.join(CV_DIR, cvEnvFileName))) {
      return NextResponse.json({ success: true, url: `/cv/${cvEnvFileName}` });
    }
  } 
  
  const CV_JSON_PATH = path.join(process.cwd(), 'src/data', 'cv.json');

  if (!fs.existsSync(CV_JSON_PATH)) {
    console.error('❌ cv.json not found. Please run generate-cv-json.ts first.');
    return NextResponse.json({ success: false, error: 'CV file not found' }, { status: 404 });
  }

  const rawCVData = fs.readFileSync(CV_JSON_PATH, 'utf-8');
  const cvData = JSON.parse(rawCVData);

  const fileName = `${cvData.name.replace(/\s+/g, '_')}_CV.pdf`;

  if (!fs.existsSync(CV_JSON_PATH)) {
    console.error('❌ file not found. Please run generate-cv-pdf.ts first.');
    return NextResponse.json({ success: false, error: 'CV file not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, url: `/cv/${fileName}` });
}
