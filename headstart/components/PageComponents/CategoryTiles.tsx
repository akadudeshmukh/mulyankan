import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Image from 'next/image';
import categoryHandler from '@/pages/api/category';
import CategoryCard from './category-card';

export default function CategoryTiles(){
    const [catagory, setCatagory] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:3000/api/category')
        .then(response => response.json())
        .then(res => setCatagory(res))
    }, [])
    return(
        <>
        <div className="container-fluid pt-5">                
                <div className="row px-xl-5 pb-3">  
                    {catagory.slice(2,8).map((cat) => ( 
                        <div className="col-lg-4 col-md-6 pb-1">
                        <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>                       
                            <CategoryCard category={cat} />       
                            </div>
                        </div>                 
                    ))}                                                                              
                </div>
            </div>            
        </>
    )
}
