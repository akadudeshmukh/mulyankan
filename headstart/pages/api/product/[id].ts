import type { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '@/types/product';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
  let product: Product = {};
  try {
    var response = await fetch('https://dummyjson.com/products/' + req.query.id);
    var json = await response.json();
    product = {
      id: json.id,
      title: json.title,
      description: json.description,
      price: json.price,
      discountPercentage: json.discountPercentage,
      rating: json.rating,
      stock: json.stock,
      brand: json.brand,
      category: json.category,
      thumbnail: json.thumbnail,
      images: json.images
    };
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(200).json(product);
  }
}