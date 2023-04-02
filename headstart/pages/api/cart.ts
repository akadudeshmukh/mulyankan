import { AddToCartRequest, AddToCartResponse } from '@/types/product';
import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from '@/utils/cookie';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {              
    try{        
        if(req.method == "POST" && req.body){                        
          var cartCookie = req.cookies["Cart"] ?? "";     
            var addToCartProduct: AddToCartRequest = req.body.product;            
            const cartResponse = await addProductsToCart(cartCookie, addToCartProduct);
            if(cartResponse && cartResponse.id){
                setCookie(res, "Cart", cartResponse, { path: '/', maxAge: 2592000 });                
            }            
        }
        else if(req.method == "GET"){
          console.log('req.cookies');
          console.log(req.cookies);
          var cartCookie = req.cookies["Cart"] ?? ""; 
          var cookieProducts: AddToCartResponse = JSON.parse(cartCookie);                   
          res.status(200).json(cookieProducts);
        }        
    }
    catch(error){
        console.log(error);        
    }
    res.status(200).json({}); 
}

const addProductsToCart = async (cartCookie: string, addToCartProduct: AddToCartRequest): Promise<any> => {                 
  let addToCartProducts: AddToCartRequest[] = [];  
  if(cartCookie){
    var cookieProducts: AddToCartResponse = JSON.parse(cartCookie);         
    cookieProducts.products.forEach((product: any) => {
      addToCartProducts.push({
        id: product.id,
        quantity: product.quantity
      });
    });
  }    
  var index = addToCartProducts.findIndex(x => x.id == addToCartProduct.id);  
    if(index < 0){
      addToCartProducts.push(addToCartProduct);
    }
    else{
      addToCartProducts[index].quantity = addToCartProduct.quantity;
    }    
  var response = await fetch('https://dummyjson.com/carts/add',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId: 1,
            products: addToCartProducts
        })
    });
    var json = await response.json(); 
 
    return json;
}