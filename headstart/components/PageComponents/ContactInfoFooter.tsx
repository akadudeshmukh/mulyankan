import Image from "next/image";
import { FooterData } from "@/assets/typescript/footer";
import Link from "next/link";

type FooterInfo = {
  data: FooterData;
};

const ContactInfoFooter = (props: FooterInfo) => {
  return (
    <>
      <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
        <Link href="" className="text-decoration-none">
          <h1 className="mb-4 display-5 font-weight-semi-bold">
            <span className="text-primary font-weight-bold border border-white px-3 mr-1">
              E
            </span>
            Shopper
          </h1>
        </Link>
        <p>{props.data.ContactInfoFooter.description}</p>
        <p className="mb-2">
          <i className="fa fa-map-marker-alt text-primary mr-3"></i>
          {props.data.ContactInfoFooter.address}
        </p>
        <p className="mb-2">
          <i className="fa fa-envelope text-primary mr-3"></i>
          {props.data.ContactInfoFooter.mail}
        </p>
        <p className="mb-0">
          <i className="fa fa-phone-alt text-primary mr-3"></i>
          {props.data.ContactInfoFooter.phone}
        </p>
      </div>
    </>
  );
};
export default ContactInfoFooter;
