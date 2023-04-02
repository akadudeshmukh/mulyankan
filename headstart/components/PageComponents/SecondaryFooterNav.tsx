import Image from "next/image";
import Link from "next/link";
import { FooterData } from "@/data/footer";
type SecondaryFooter = {
  data: FooterData;
};
const SecondaryFooterNav = (props: SecondaryFooter) => {
  return (
    <>
      <h5 className="font-weight-bold text-dark mb-4">Trendy Link</h5>
      <div className="d-flex flex-column justify-content-start">
        {props.data.SecondaryFooterNav.map((nav) => (
          <>
            <h5 className="font-weight-bold text-dark mb-4">
              {nav.sectiontitle}
            </h5>
            <Link className="text-dark mb-2" href={`${nav.link}`}>
              <i className="fa fa-angle-right mr-2"></i>
              {nav.linktitle}
            </Link>
          </>
        ))}
        {/* <Link
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
        </Link> */}
      </div>
    </>
  );
};
export default SecondaryFooterNav;
