import Layout from '@/components/Layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

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
      {/* Email Subscription */}
      {/* Brand Tiles */}
      <BrandTile data={imageData} />
    </Layout>
  );
}
