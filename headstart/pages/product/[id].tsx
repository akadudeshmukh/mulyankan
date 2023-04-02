import AddToCart from '@/components/ProductDetails/AddToCart'
import Image from 'next/image'
import { Product } from '@/types/product'
import Layout from '@/components/Layout/Layout'
import { Inter } from '@next/font/google'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import ProductImageCarousel from '@/components/ProductImageCarousel/ProductImageCarousel'
import ProductInformation from '@/components/ProductDetails/ProductInformation'
import { loremIpsum } from 'lorem-ipsum';

import ProductTabs from '@/components/ProductDetails/ProductTabs'
import exp from 'constants'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  product: Product,
  shortDescription: string,
  longDescription: string
};

export default function ProductDetails(props: Props) {  
  var images: string[] = [];
  if(props.product.images){
    images = props.product.images;    
  }  
  const pageTitle = props.product.title + " - Product";  
  return (    
    <Layout title={pageTitle}>
      <Breadcrumb category={props.product.category ?? ""} page={props.product.title ?? ""} />
      <div className='container-fluid py-5'>
        <div className='row px-xl-5'>
          <div className='col-lg-5 pb-5'>
            <ProductImageCarousel images={images}/>                    
          </div>
          <div className='col-lg-7 pb-5'>
            <ProductInformation product={props.product} productDescription={props.shortDescription}/> 
            <AddToCart product={props.product}></AddToCart>         
          </div>
        </div>
        <div className='row px-xl-5'>
          <div className='col'>
            <ProductTabs  product={props.product} productDescription={props.longDescription} />
          </div>
        </div>
      </div>            
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const response = await fetch('https://dummyjson.com/products');
//   var productsJson = await response.json();
//   var products = productsJson.products;  
//   const paths = products.map((product: any, i: number) => ({
//     params: {id: product.id.toString()}
//   }));
//   return { paths, fallback: false };
// }

export async function getServerSideProps(context: any){
  const response = await fetch('http://localhost:3000/api/product/' + context.params.id);
  var product: Product = await response.json();   
    if(product && product.id) {
      return {
        props:{
          product: product,
          shortDescription: shortDescription(),
          longDescription: longDescription()
        }
      };
    }  
    return {
      notFound: true,
    };
}

// export async function getStaticProps(context: any){  
//   var product: Product = {};
//   if(context.params && context.params.id){    
//     const response = await fetch('http://localhost:3000/api/product/' + context.params.id);
//     product = await response.json();          
//   }  
//   return {
//     props:{
//       product: product,
//       shortDescription: shortDescription(),
//       longDescription: longDescription()
//     }
//   };
// }

function shortDescription(){  
  const description = loremIpsum({
    count: 5,
    format: "plain",
    paragraphLowerBound: 3,
    paragraphUpperBound: 7,
    random: Math.random,
    sentenceLowerBound: 5,
    sentenceUpperBound: 15,
    suffix: "\n",
    units: "sentences"    
});
return description;
}

function longDescription(){  
  const description = loremIpsum({
    count: 5,
    format: "html",
    paragraphLowerBound: 3,
    paragraphUpperBound: 7,
    random: Math.random,
    sentenceLowerBound: 5,
    sentenceUpperBound: 15,
    suffix: "\n",
    units: "paragraphs"    
});
return description;
}
