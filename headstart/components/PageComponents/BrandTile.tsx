import Image from "next/image";
import { imageInfo } from "@/data/brandTile-data";

type TileData = {
  data: imageInfo;
};

export const BrandTile = (props: TileData) => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col">
            <div className="owl-carousel vendor-carousel">
              {props.data.imagelinks.map((imgsrc) => (
                <div className="vendor-item border p-4">
                  <Image src={imgsrc.src} alt="" height={222} width={222} />
                </div>
              ))}

              {/* <div className="vendor-item border p-4">
                <Image
                  src={"/img/vendor-1.jpg"}
                  alt=""
                  height={100}
                  width={100}
                />
              </div>
              <div className="vendor-item border p-4">
                <Image
                  src="/img/vendor-2.jpg"
                  alt=""
                  height={100}
                  width={100}
                />
              </div>
              <div className="vendor-item border p-4">
                <Image
                  src="/img/vendor-3.jpg"
                  alt=""
                  height={100}
                  width={100}
                />
              </div>
              <div className="vendor-item border p-4">
                <Image
                  src="/img/vendor-4.jpg"
                  alt=""
                  height={100}
                  width={100}
                />
              </div>
              <div className="vendor-item border p-4">
                <Image
                  src="/img/vendor-5.jpg"
                  alt=""
                  height={100}
                  width={100}
                />
              </div>
              <div className="vendor-item border p-4">
                <Image
                  src="/img/vendor-6.jpg"
                  alt=""
                  height={100}
                  width={100}
                />
              </div>
              <div className="vendor-item border p-4">
                <Image
                  src="/img/vendor-7.jpg"
                  alt=""
                  height={100}
                  width={100}
                />
              </div>
              <div className="vendor-item border p-4">
                <Image
                  src="/img/vendor-8.jpg"
                  alt=""
                  height={100}
                  width={100}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
