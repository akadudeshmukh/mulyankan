import Image from "next/image";
import Link from "next/link";
import { FooterData } from "@/data/footer";
type SecondaryFooter = {
  data: FooterData;
};
const SecondaryFooterNav = (props: SecondaryFooter) => {
  return (
    <>
      <h5 className="font-weight-bold text-dark mb-4">
        {props.data.SecondaryFooterNav.sectiontitle}
      </h5>
      <div className="d-flex flex-column justify-content-start">
        <Link
          className="text-dark mb-2"
          href={`${props.data.SecondaryFooterNav.Home.link}`}
        >
          <i className="fa fa-angle-right mr-2"></i>
          {props.data.SecondaryFooterNav.Home.linktitle}
        </Link>
        <Link
          className="text-dark mb-2"
          href={`${props.data.SecondaryFooterNav.shops.link}`}
        >
          <i className="fa fa-angle-right mr-2"></i>
          {props.data.SecondaryFooterNav.shops.linktitle}
        </Link>
        <Link
          className="text-dark mb-2"
          href={`${props.data.SecondaryFooterNav.shopdetail.link}`}
        >
          <i className="fa fa-angle-right mr-2"></i>
          {props.data.SecondaryFooterNav.shopdetail.linktitle}
        </Link>
        <Link
          className="text-dark mb-2"
          href={`${props.data.SecondaryFooterNav.shoppingcart.link}`}
        >
          <i className="fa fa-angle-right mr-2"></i>
          {props.data.SecondaryFooterNav.shoppingcart.linktitle}
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
export default SecondaryFooterNav;
