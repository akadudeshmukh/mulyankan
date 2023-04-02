import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { imageData } from "@/data/brandTile-data";
import { BrandTile } from "@/components/PageComponents/BrandTile";
import Carousel from "@/components/PageComponents/Carousel";
import Link from "next/link";
import FeaturedCards from "@/components/PageComponents/FeaturedCards";
import CategoryTiles from "@/components/PageComponents/CategoryTiles";
import TrandyProductsPost from "@/components/PageComponents/TrandyProducts_d";
import Subscription from '@/components/PageComponents/EmailSubscription'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="Home-Barbarik">
    <Carousel />
    <FeaturedCards />
    <CategoryTiles />
    {/* Image Carousel */}
    {/* Feature Cards */}
    {/* Category Tiles */}
    {/* Trendy Products */}
    <TrandyProductsPost></TrandyProductsPost>
    <Subscription title="Stay Updated" desc="Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore."></Subscription>
    {/* Brand Tiles */}
    <BrandTile data={imageData} />
  </Layout>
  );
}
