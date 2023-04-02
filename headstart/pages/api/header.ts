import {topBarData} from '@/data/header-data';
import type { NextApiRequest, NextApiResponse } from 'next';
import Header from '@/components/Header/Header';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try{
    // var apiResult = await 
    // fetch(process.env.NEXT_PUBLIC_API_ENDPOINT+'/jsons/headerData.json');
    // var json = await apiResult.json();
    // console.log(json);
    res.status(200).json(topBarData);

  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }  
}