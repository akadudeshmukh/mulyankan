import Link from "next/link";
import { Product } from "@/types/product";

type Props = {
    product: Product,
    productDescription: string
}

const ProductInformation = (props: Props) => {        
    return(
        <>        
        <h3 className="font-weight-semi-bold">
            {props.product.title}
        </h3>
        <div className="d-flex mb-3">
            <div className="text-primary mr-2">
                <small className="fas fa-star"></small>
                <small className="fas fa-star"></small>
                <small className="fas fa-star"></small>
                <small className="fas fa-star-half-alt"></small>
                <small className="far fa-star"></small>
            </div>
            <small className="pt-1">{props.product.rating}</small>
        </div>
        <h3 className="font-weight-semi-bold mb-4">${props.product.price} (-{props.product.discountPercentage}%)</h3>
        <p className="mb-4">{props.productDescription}</p>
        </>      
    );
}

export default ProductInformation;