import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try{
    var apiResult = await fetch('https://dummyjson.com/posts/q=1');
    var json = await apiResult.json();
    res.status(200).json(json);
  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }  
}