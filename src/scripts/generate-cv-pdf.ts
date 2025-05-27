import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToBuffer } from '@react-pdf/renderer';
import { CVJsonData } from '@/types';
import { hashCVData } from '@/utils/hashData';
import { Document } from '@react-pdf/renderer';

import { CVDocument } from '@/components/cvDocument/CVDocument';

const generateCVFile = async (data: CVJsonData, filePath:string) => {

    // Correctly use Document wrapper around CVDocument
    const pdfDocument =  React.createElement(Document, {}, React.createElement(CVDocument, { data }));

    // Render the PDF document to a buffer
    const pdfBuffer = await renderToBuffer(pdfDocument);

    fs.writeFileSync(filePath, pdfBuffer);
}

(async () => {
    const CV_DIR = path.join(process.cwd(), 'public', 'cv');
    const HASH_DIR = path.join(process.cwd(), 'src/data/hash');
    const CV_JSON_PATH = path.join(process.cwd(), 'src/data', 'cv.json');

    if (!fs.existsSync(CV_JSON_PATH)) {
        console.error('❌ cv.json not found. Please run generate-cv-json.ts first.');
        process.exit(1);
    }
    

    if (!fs.existsSync(CV_DIR)) {
        fs.mkdirSync(CV_DIR, { recursive: true });
    }

    if (!fs.existsSync(HASH_DIR)) {
        fs.mkdirSync(HASH_DIR, { recursive: true });
    }

    const rawCVData = fs.readFileSync(CV_JSON_PATH, 'utf-8');
    const cvData = JSON.parse(rawCVData);

    if (!cvData) {
        console.error('No data found to generate cv file.');
        return;
    }

    const fileName = `${cvData.name.replace(/\s+/g, '_')}_CV.pdf`;
    
    const PDF_PATH = path.join(CV_DIR, fileName);
    const HASH_PATH = path.join(HASH_DIR, 'cv-pdf.hash');

    const currentHash = hashCVData(cvData);
        let previousHash = '';
    
        if (fs.existsSync(HASH_PATH)) {
            previousHash = fs.readFileSync(HASH_PATH, 'utf-8');
        }
    
        const needsRegeneration = !fs.existsSync(PDF_PATH) || previousHash !== currentHash;

        if (needsRegeneration) {            
            try {
                await generateCVFile(cvData, PDF_PATH);
                console.log(`✅ CV PDF saved to ${PDF_PATH}`);
                fs.writeFileSync(HASH_PATH, currentHash);
            } catch (error) {
                console.error('Error generating PDF:', error);
            }
        }
})();