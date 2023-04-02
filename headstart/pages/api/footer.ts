import type { NextApiRequest, NextApiResponse } from 'next'
import data from '@/data/footer';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
