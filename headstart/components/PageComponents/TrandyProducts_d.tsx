import Layout from "../Layout/Layout";

import useSWR from 'swr';

 const fetcher = (url:string) => fetch(url).then((res) => res.json());

export default function TrandyProductsPost(){
    const { data, error } = useSWR('/api/product', fetcher);

    //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

    return (
<Layout title="Trandy Products">
    <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
        </div>
        <span>Name: {data.products[0].title}</span>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={data.products[0].thumbnail} alt=""></img>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{data.products[0].title}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>{data.products[0].discountPercentage}</h6><h6 className="text-muted ml-2"><del>{data.products[0].price}</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
        <div className="row px-xl-5 pb-3">
        {
            data.products.map((product: any, index: number) => { 
            return (
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={product.thumbnail} alt=""></img>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{product.title}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>{product.discountPercentage}</h6><h6 className="text-muted ml-2"><del>{product.price}</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            )})
            }  
        </div>
    </div>
</Layout>
);
}

// export default TrandyProducts_d;