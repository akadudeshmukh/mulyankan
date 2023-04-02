import Image from "next/image";
import Link from "next/link";
import useSWR from 'swr';

//#region StaticCarousel
// const Carousel = () => {  
//     return(        
//         <>


//             <div id="header-carousel" className="carousel slide" data-ride="carousel">
//                 <div className="carousel-inner">
//                     <div className="carousel-item active" style={{ height: "410px;" }}>
//                         <Image className="img-fluid" src="/img/carousel-1.jpg" alt="Image" width={1903} height={1070} />
//                         <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
//                             <div className="p-3" style={{ maxWidth: "700px;" }}>
//                                 <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
//                                 <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
//                                 <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item" style={{ height: "410px;" }} >
//                         <Image className="img-fluid" src="/img/carousel-2.jpg" alt="Image"  width={1903} height={1070} />
//                         <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
//                             <div className="p-3" style={{ maxWidth: "700px;" }}>
//                                 <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
//                                 <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
//                                 <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
//                     <div className="btn btn-dark" style={{ width: "45px;", height: "45px;" }}>
//                         <span className="carousel-control-prev-icon mb-n2"></span>
//                     </div>
//                 </a>
//                 <a className="carousel-control-next" href="#header-carousel" data-slide="next">
//                     <div className="btn btn-dark" style={{ width: "45px;", height: "45px;" }}>
//                         <span className="carousel-control-next-icon mb-n2"></span>
//                     </div>
//                 </a>
//             </div>


//         </>
//     )
// }
//export default Carousel;
//#endregion


//#region JsonCarousel
//as we can't set the "active" class to first banner - this code is commented.
export async function fetcher() {
    const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT+'/api/imgCarousel')
    const data = await response.json();
    console.log('Resp');
    console.log(data.items.carousel[0].body);
    return data
}
const Carousel = () => {
    const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_ENDPOINT+"/api/imgCarousel", fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    let active="";
    return (
        <>

            <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                {/* <div className="carousel-item active" style={{ height: "410px;" }}>
                         <Image className="img-fluid" src="/img/carousel-1.jpg" alt="Image" width={1903} height={1070} />
                         <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                             <div className="p-3" style={{ maxWidth: "700px;" }}>
                                 <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                 <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                 <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                             </div>
                         </div>
                     </div>
                     <div className="carousel-item" style={{ height: "410px;" }} >
                         <Image className="img-fluid" src="/img/carousel-2.jpg" alt="Image"  width={1903} height={1070} />
                         <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                             <div className="p-3" style={{ maxWidth: "700px;" }}>
                                 <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                 <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                 <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                             </div>
                         </div>
                     </div> */}
                    {                        
                        data.items.carousel.map((item:any) => {
                            item.id=='1'? active="active":active="";
                            return (                               
                                <div className={`carousel-item ${active}`} >
                                    <Image className="img-fluid" src={item.imageUrl} alt="Image" width={1903} height={1070} />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: "700px;" }}>
                                            <h4 className="text-light text-uppercase font-weight-medium mb-3">{item.body}</h4>
                                            <h3 className="display-4 text-white font-weight-semi-bold mb-4">{item.title}</h3>
                                            <a href={item.linkUrl} className="btn btn-light py-2 px-3">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                   
                </div>
                <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                    <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
                        <span className="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </a>
                <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                    <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
                        <span className="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a>
            </div>


        </>
    )
}
export default Carousel;
//#endregion

