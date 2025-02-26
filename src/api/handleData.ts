import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const filePath = path.join(process.cwd(), 'data.json');

interface Item {
  id: number;
  name: string;
  description: string;
}

const readData = (): Item[] => {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

const writeData = (data: Item[]) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let data = readData();

  switch (req.method) {
    case 'GET':
      res.status(200).json(data);
      break;
    
    case 'POST':
      const newItem: Item = { id: Date.now(), ...req.body };
      data.push(newItem);
      writeData(data);
      res.status(201).json(newItem);
      break;
    
    case 'PUT':
      const { id, name, description } = req.body;
      data = data.map(item => (item.id === id ? { ...item, name, description } : item));
      writeData(data);
      res.status(200).json({ message: 'Updated successfully' });
      break;
    
    case 'DELETE':
      data = data.filter(item => item.id !== req.body.id);
      writeData(data);
      res.status(200).json({ message: 'Deleted successfully' });
      break;
    
    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}
