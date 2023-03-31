import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    const data = await fetch('https://dummyjson.com/posts');
    const response = await data.json();
    res.status(200).json(response);
}