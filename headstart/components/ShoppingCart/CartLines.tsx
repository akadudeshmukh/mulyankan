import useSWR from 'swr'
import Link from "next/link";
import { AddToCartResponse } from '@/types/product';
import { CartLineItem } from '@/types/product';


type Props = {
    cart: AddToCartResponse
  };
 

const CartLines = (props: Props) => {    
    return(
        <div className="container-fluid pt-5">
        <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
                <table className="table table-bordered text-center mb-0">
                    <thead className="bg-secondary text-dark">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">     
                    {
                         props.cart.products.map((line, i) => {
                            var productUrl = '/product/' + line.id;
                            return(
                                <tr>
                                                <td className="align-middle"><img src={line.image} alt="" style={{width: "50px"}} /></td>
                                                <td className="align-middle">
                                                    <Link className='underline' href={productUrl}>{line.title}</Link>
                                                </td>
                                                <td className="align-middle">{line.price}</td>
                                                <td className="align-middle">
                                                    <div className="input-group quantity mx-auto" style={{width: "100px"}}>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-sm btn-primary btn-minus">
                                                            <i className="fa fa-minus"></i>
                                                            </button>
                                                        </div>
                                                        <input type="text" className="form-control form-control-sm bg-secondary text-center" value="1" />
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-sm btn-primary btn-plus">
                                                                <i className="fa fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle"><span className='line-through'>${line.total}</span> <span>${line.discountedPrice}</span></td>
                                                <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                                            </tr>
                            )
                        })
                    }              
                    </tbody>
                </table>
            </div>
            <div className="col-lg-4">
                <form className="mb-5" action="">
                    <div className="input-group">
                        <input type="text" className="form-control p-4" placeholder="Coupon Code" />
                        <div className="input-group-append">
                            <button className="btn btn-primary">Apply Coupon</button>
                        </div>
                    </div>
                </form>
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between mb-3 pt-1">
                            <h6 className="font-weight-medium">Subtotal</h6>
                            <h6 className="font-weight-medium">${props.cart.total}</h6>
                        </div>
                        <div className="d-flex justify-content-between mb-3 pt-1">
                            <h6 className="font-weight-medium">Discount</h6>
                            <h6 className="font-weight-medium">${props.cart.total - props.cart.discountedTotal}</h6>
                        </div>
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                        <div className="d-flex justify-content-between mt-2">
                            <h5 className="font-weight-bold">Order Total</h5>
                            <h5 className="font-weight-bold">${props.cart.discountedTotal}</h5>
                        </div>
                        <button className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default CartLines;