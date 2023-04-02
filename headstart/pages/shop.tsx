import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Filters } from "@/components/PageComponents/ShopFilters";

const inter = Inter({ subsets: ["latin"] });

export default function Shop() {
  return (
    <>
      <Layout title="Home-Barbarik">
        {/* Breadcrumb */}
        {/* Filters */}
        <Filters />
        {/* Product List */}
        {/* Pagination */}
      </Layout>
    </>
  );
}
