import crypto from 'crypto';
import { CVData } from '@/interfaces';

export function hashCVData(data: CVData, summary: string): string {
  const cvData = JSON.stringify(data);
  const stringToHash = `${cvData}${summary}`;
  return crypto.createHash('sha256').update(stringToHash).digest('hex');
}
