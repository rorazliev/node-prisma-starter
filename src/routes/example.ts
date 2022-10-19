import { Router } from 'express';
import prisma from '../prisma/prisma';

const router = Router();

router.get('/example', async (req, res) => {
  try {
    const records = await prisma.example.findMany({});

    res.json({
      records: records,
    });
  } catch (error) {
    throw error;
  }
});

export default router;
