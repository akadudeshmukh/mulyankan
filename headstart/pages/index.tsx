import Layout from '@/components/Layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Carousel from '@/components/PageComponents/Carousel'
import Link from 'next/link'
import FeaturedCards from '@/components/PageComponents/FeaturedCards'
import CategoryTiles from '@/components/PageComponents/CategoryTiles'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title="Home-Barbarik">     
      <Carousel/>
      <FeaturedCards/>
      <CategoryTiles/>
      {/* Image Carousel */}
      {/* Feature Cards */}      
      {/* Category Tiles */}
      {/* Trendy Products */}
      {/* Email Subscription */}
      {/* Brand Tiles */}
    </Layout>
  )
}
