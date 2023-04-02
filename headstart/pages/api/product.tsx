import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    const data = await fetch('https://dummyjson.com/products?limit=8&skip=0');
    const response = await data.json();
    res.status(200).json(response);
}