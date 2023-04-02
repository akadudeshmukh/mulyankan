import Image from "next/image";
import { FooterData } from "@/data/footer";
import Link from "next/link";
type PrimaryFooter = {
  data: FooterData;
};
const PrimaryFooterNav = (props: PrimaryFooter) => {
  return (
    <>
      <h5 className="font-weight-bold text-dark mb-4">
        {props.data.PrimaryFooterNav.sectiontitle}
      </h5>
      <div className="d-flex flex-column justify-content-start">
        <Link
          className="text-dark mb-2"
          href={`${props.data.PrimaryFooterNav.Home.link}`}
        >
          <i className="fa fa-angle-right mr-2"></i>
          {props.data.PrimaryFooterNav.Home.linktitle}
        </Link>
        <Link
          className="text-dark mb-2"
          href={`${props.data.PrimaryFooterNav.shops.link}`}
        >
          <i className="fa fa-angle-right mr-2"></i>
          {props.data.PrimaryFooterNav.shops.linktitle}
        </Link>
        <Link
          className="text-dark mb-2"
          href={`${props.data.PrimaryFooterNav.shopdetail.link}`}
        >
          <i className="fa fa-angle-right mr-2"></i>
          {props.data.PrimaryFooterNav.shopdetail.linktitle}
        </Link>
        <Link
          className="text-dark mb-2"
          href={`${props.data.PrimaryFooterNav.shoppingcart.link}`}
        >
          <i className="fa fa-angle-right mr-2"></i>
          {props.data.PrimaryFooterNav.shoppingcart.linktitle}
        </Link>
        <Link
          className="text-dark mb-2"
          href={`${props.data.PrimaryFooterNav.Checkout.link}`}
        >
          <i className="fa fa-angle-right mr-2"></i>{" "}
          {props.data.PrimaryFooterNav.Checkout.linktitle}
        </Link>
        <Link
          className="text-dark"
          href={`${props.data.PrimaryFooterNav.Contactus.link}`}
        >
          <i className="fa fa-angle-right mr-2"></i>{" "}
          {props.data.PrimaryFooterNav.Contactus.linktitle}
        </Link>
      </div>
    </>
  );
};
export default PrimaryFooterNav;
