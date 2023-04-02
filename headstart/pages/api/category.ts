import type { NextApiRequest, NextApiResponse } from 'next';

export default async function categoryHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try{
    const { category } = req.query;
    
    var apiResult = null;

    if(category) {
        apiResult = await fetch(`https://dummyjson.com/products/category/${category}`);
    }
    else{
        apiResult = await fetch('https://dummyjson.com/products/categories');
    }
    var json = await apiResult.json();
    res.status(200).json(json);
  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }  
}