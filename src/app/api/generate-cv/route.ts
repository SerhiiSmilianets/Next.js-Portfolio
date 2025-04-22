import { NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import fs from 'fs';
import path from 'path';
import React from 'react';

import { hashCVData } from '@/utils/hashData';
import { CVDocument } from '@/components/cv/CVDocument';
import cvData from '@/data/data.json';

const CV_DIR = path.join(process.cwd(), 'public', 'cv');

export async function GET() {
  if (!fs.existsSync(CV_DIR)) {
    fs.mkdirSync(CV_DIR, { recursive: true });
  }
    
  const fileName = `${cvData.personalInfo.name.replace(/\s+/g, '_')}_CV.pdf`;
  const PDF_PATH = path.join(CV_DIR, fileName);
  const HASH_PATH = path.join(CV_DIR, 'cv.hash');

  const currentHash = hashCVData(cvData);
  let previousHash = '';

  if (fs.existsSync(HASH_PATH)) {
    previousHash = fs.readFileSync(HASH_PATH, 'utf-8');
  }

  const needsRegeneration = !fs.existsSync(PDF_PATH) || previousHash !== currentHash;

  if (needsRegeneration) {
    console.log('Generating new PDF CV...');
    try {
      // const pdfElement = React.createElement(CVDocument, { data: cvData });
      const pdfBuffer = await renderToBuffer(React.createElement(CVDocument, { data: cvData }));

      fs.writeFileSync(PDF_PATH, pdfBuffer);
      fs.writeFileSync(HASH_PATH, currentHash);
    } catch (error) {
      console.error('Error generating PDF:', error);
      return NextResponse.json({ success: false, error: 'Failed to generate CV' }, { status: 500 });
    }
  } else {
    console.log('Using cached CV...');
  }

  return NextResponse.json({ success: true, url: `/cv/${fileName}` });
}
