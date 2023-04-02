import Image from "next/image";
import PrimaryFooterNav from "../PageComponents/PrimaryFooterNav";
import SecondaryFooterNav from "../PageComponents/SecondaryFooterNav";
import NewsLetterFooter from "../PageComponents/NewsLetterFooter";
import LegalLinkFooter from "../PageComponents/LegalLinkFooter";
import ContactInfoFooter from "../PageComponents/ContactInfoFooter";
import React, { useEffect, useState } from "react";
import { FooterData } from "@/data/footer";

export default function Footer() {
  const [data, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + "/api/footer")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setFooterData(res);
      });
  }, []);

  return (
    <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
      <div className="row px-xl-5 pt-5">
        {data && <ContactInfoFooter data={data} />}

        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-md-4 mb-5">
              {data && <PrimaryFooterNav data={data} />}
            </div>
            <div className="col-md-4 mb-5">
              {data && <SecondaryFooterNav data={data} />}
            </div>
            <div className="col-md-4 mb-5">
              <NewsLetterFooter></NewsLetterFooter>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-top border-light mx-xl-5 py-4">
        {data && <LegalLinkFooter data={data} />}
      </div>
    </div>
  );
}
