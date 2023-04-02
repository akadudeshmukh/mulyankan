import Link from "next/link";
import Image from 'next/image';

import { useEffect, useState } from "react"

const CategoryCard = ({category}: {category: string}) => {
    const [data, setData] = useState([]);
    let imageUrl;
    useEffect(() => {
        fetch(`http://localhost:3000/api/category?category=${category}`)
        .then(response => response.json())
        .then(res => setData(res))
    }, [])
    // const image: string | undefined = data && data.products && data.products[0].images && data.products[0].images[0];
    const image: string | undefined = data && data.products && data.products[0].thumbnail && data.products[0].thumbnail;
    return (                       
        <>       
            <p className="text-right">{data && data.total} Products</p>
            <Link href={""} className="cat-img position-relative overflow-hidden mb-3">
            <Image src={image ?? ""} alt='' className="img-fluid" width={500} height={400}></Image>             
            </Link>
            <h5 className="font-weight-semi-bold m-0">{category}</h5>
        </>        
    )
}
export default CategoryCard;