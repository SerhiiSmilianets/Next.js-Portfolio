import crypto from 'crypto';
import { CVData } from '@/interfaces';

export function hashCVData(data: CVData): string {
  const json = JSON.stringify(data);
  return crypto.createHash('sha256').update(json).digest('hex');
}
