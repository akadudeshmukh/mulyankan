import { Product } from "@/types/product";
import { AddToCartResponse, CartLineItem } from "@/types/product";
import Layout from "@/components/Layout/Layout"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import CartLines from "@/components/ShoppingCart/CartLines";

type Props = {
   cart: AddToCartResponse
};

export default function ShoppingCart(props: Props) {
   return (
      <Layout title="Shopping Cart">
         <Breadcrumb page="Shopping Cart" />
         <CartLines cart={props.cart} />
      </Layout>
   )
}

export async function getServerSideProps(context: any) {
   if (context.req && context.req.cookies && context.req.cookies.Cart) {
      var cookieProducts: AddToCartResponse = JSON.parse(context.req.cookies.Cart);
      if (cookieProducts && cookieProducts.id && cookieProducts.products) {
         for (let i = 0; i < cookieProducts.products.length; i++) {
            const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + '/api/product/' + cookieProducts.products[i].id);
            var product: Product = await response.json();
            cookieProducts.products[i].image = product.images && product.images[0];
         }
         return {
            props: {
               cart: cookieProducts
            }
         };
      }
   }
   return {
      notFound: true,
   };
}