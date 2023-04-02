import Link from "next/link";
import Image from "next/image";

type Props = {
    images: string[]
}

const ProductImageCarousel = (props: Props) => {
    return(
        <div id="product-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner border">            
            {
                props.images.map((img: string, i: number) => {
                    var className = "carousel-item";
                    if(i == 0) 
                    {
                        className += " active";
                    }
                    return(
                        <div className={className}>
                            <Image height="0" width="0" sizes="100vw" className="w-100 h-100" src={img} alt="Image" />                                        
                        </div>
                    )
                })
            }
        </div>
        <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
            <i className="fa fa-2x fa-angle-left text-dark"></i>
        </a>
        <a className="carousel-control-next" href="#product-carousel" data-slide="next">
            <i className="fa fa-2x fa-angle-right text-dark"></i>
        </a>
    </div>
    );
}

export default ProductImageCarousel;