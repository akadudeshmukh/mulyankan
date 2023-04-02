import Layout from '@/components/Layout/Layout'
import TrandyProductsPost from '@/components/PageComponents/TrandyProducts_d'
// import TrandyProducts from '@/components/PageComponents/TrandyProducts'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title="Home-Barbarik">
      {/* Image Carousel */}
      {/* Feature Cards */}
      {/* Category Tiles */}
      {/* Trendy Products */}
      <TrandyProductsPost></TrandyProductsPost>
      {/* Email Subscription */}
      {/* Brand Tiles */}
    </Layout>
  )
}
