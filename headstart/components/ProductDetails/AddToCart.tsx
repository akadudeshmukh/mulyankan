import { useState } from "react";
import { AddToCartRequest } from "@/types/product";
import Link from "next/link";
import { Product } from "@/types/product";
import useSWR from 'swr';

type Props = {
    product: Product,    
}

const AddToCart = (props: Props) => {            
    const [ quantity, setQuantity ] = useState(1);
    const [ id, setId ] = useState(props.product.id);

    const incrementQuantity = (quantity: number) => {                
        setQuantity(quantity + 1);        
    }

    const decrementQuantity = (quantity: number) => {      
        if(quantity > 1)  {
            setQuantity(quantity - 1);
        }        
    }

    const handleSubmit = async (event: any) => { 
        event.preventDefault();               
        let request: AddToCartRequest = {
            id: event.target.id.value,
            quantity: event.target.quantity.value
        };          
        const response = await fetch('http://localhost:3000/api/cart',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product: request
            },)
        });
        var addToCartResponse = await response.json();    
        return addToCartResponse;
    }
    

    return(
        <form onSubmit={handleSubmit}>
            <div className="d-flex align-items-center mb-4 pt-2">
                    <div className="input-group quantity mr-3" style={{width: "130px"}}>
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-primary btn-minus" onClick={(e) => {decrementQuantity(quantity)}}>
                            <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <input type="hidden" id="id" name="id" value={props.product.id} />
                        <input disabled type="text" id="quantity" onChange={(e) => setQuantity(e.target.valueAsNumber)} name="quantity" className="form-control bg-secondary text-center" value={quantity} />
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-primary btn-plus" onClick={(e) => {incrementQuantity(quantity)}}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                </div>     
        </form>         
    );
}

export default AddToCart;