import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import {promises as fs} from 'fs';

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse<any>
) {
  try{
    var directory =path.join(process.cwd(),"public/assets/jsons/imageCarousel.json");
    var content= await fs.readFile(directory,"utf-8");
    var jsonData= await JSON.parse(content);
    console.log('json call');
    console.log(jsonData);
    res.status(200).json(jsonData);
  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }  
}