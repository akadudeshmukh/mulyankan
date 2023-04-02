import Link from "next/link";
import { Product } from "@/types/product";

type Props = {
    product: Product,
    productDescription: string
}

const ProductTabs = (props: Props) => {        
    return(
        <>        
        <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                    <a className="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Product Overview</a>                    
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade active show" id="tab-pane-1">
                        <h4 className="mb-3">Specifications/Overview</h4>
                        <div className="specifications-content">
                <table>
                    <tbody>                        
                        <tr>
                            <th data-bind="text: sectionAttribute.Key">Brand</th>
                            <td data-bind="text: sectionAttribute.Value">{props.product.brand}</td>
                        </tr>
                        <tr>
                            <th data-bind="text: sectionAttribute.Key">Category</th>
                            <td data-bind="text: sectionAttribute.Value">{props.product.category}</td>
                        </tr>
                        <tr>
                            <th data-bind="text: sectionAttribute.Key">Model Number</th>
                            <td data-bind="text: sectionAttribute.Value">{props.product.id}</td>
                        </tr>                        
                    </tbody>
                </table>
            </div>
            <br/>
                    <div dangerouslySetInnerHTML={createMarkup(props.productDescription)}></div>
                    </div>                    
                </div>
        </>      
    );
}

function createMarkup(text: string) {
    return {__html: text};
  }

export default ProductTabs;