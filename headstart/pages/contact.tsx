import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Contact from "@/components/PageComponents/ContactUs";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

export default function Contactus() {
  return (
    <Layout title="Home-Barbarik">
      <Breadcrumb page="Contact"></Breadcrumb>
      <Contact></Contact>
    </Layout>
  );
}
