import Image from "next/image";
import Link from "next/link";
import { FooterData } from "@/data/footer";
type LegalLink = {
  data: FooterData;
};
const LegalLinkFooter = (props: LegalLink) => {
  return (
    <>
      <div className="col-md-6 px-xl-0">
        <p className="mb-md-0 text-center text-md-left text-dark">
          ©{" "}
          <Link
            className="text-dark font-weight-semi-bold"
            href={`${props.data.LegalLinkFooter.site}`}
          >
            {props.data.LegalLinkFooter.sitename}
          </Link>
          {props.data.LegalLinkFooter.text.legalcontent}
          <Link
            className="text-dark font-weight-semi-bold"
            href={`${props.data.LegalLinkFooter.site}`}
          >
            {props.data.LegalLinkFooter.text.designedby}
          </Link>{" "}
          <Link href={`${props.data.LegalLinkFooter.site}`} target="_blank">
            {props.data.LegalLinkFooter.text.designedby}
          </Link>
        </p>
      </div>
      <div className="col-md-6 px-xl-0 text-center text-md-right">
        <Image
          className="img-fluid"
          src="/img/payments.png"
          width={225}
          height={22}
          alt=""
        />
      </div>
    </>
  );
};
export default LegalLinkFooter;
