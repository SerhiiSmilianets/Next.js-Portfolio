import crypto from 'crypto';
import { AllData } from '@/types';

export function hashCVData(data: AllData): string {
  const cvData = JSON.stringify(data);
  return crypto.createHash('sha256').update(cvData).digest('hex');
}
